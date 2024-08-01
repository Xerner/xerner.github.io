import { HttpContext, HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, filter, map, Observable, of, tap } from "rxjs";
import { AppStore } from "../stores/app.store";

@Injectable()
export class UrlCachingInterceptor implements HttpInterceptor {
  constructor(
    public appStore: AppStore,
  ) { }

  intercept(req: HttpRequest<any>, handler: HttpHandler): Observable<HttpEvent<any>> {
    // Dont send request and use cache if using cached file is enabled
    if (this.appStore.APP_SETTINGS.caching?.useCacheFile || this.appStore.urlCache.hasOwnProperty(req.url)) {
      // This shit doesnt work and idk why
      var fakeHttpEvent = this.makeFakeHttpOkResponseFromCache(req);
      var fakeReq = req.clone({ responseType: "json", url: "using cache instead" });
      // var fakeReq = req.clone({""});
      return handler.handle(fakeReq).pipe(
        catchError(_ => {
          return of(fakeHttpEvent, fakeHttpEvent, fakeHttpEvent);
        }),
      );
      // return of(fakeHttpEvent).pipe(
      //   map(response => {
      //     console.log('Using cache instead of sending request for', req.url);
      //     return response;
      //   })
      // );
    }

    // Cache url results
    return handler.handle(req).pipe(
      tap(results => {
        console.log("Caching results for", req.url);
        this.appStore.urlCache[req.url] = results;
      })
    );
  }

  makeFakeHttpOkResponseFromCache(req: HttpRequest<any>) {
    var cachedResponse = this.appStore.urlCache[req.url];
    return cachedResponse;
  }
}
