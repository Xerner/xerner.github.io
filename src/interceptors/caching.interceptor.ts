import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { AppStore } from "../stores/app.store";
import { CacheStore } from "../stores/cache.store";

@Injectable()
export class UrlCachingInterceptor implements HttpInterceptor {
  constructor(
    private appStore: AppStore,
    private cacheStore: CacheStore,
  ) { }

  intercept(req: HttpRequest<any>, handler: HttpHandler): Observable<HttpEvent<unknown>> {
    // passthrough if caching is disabled
    var shouldCacheResponses = this.appStore.APP_SETTINGS.caching
      && this.appStore.APP_SETTINGS.caching.enableInterceptor
      && !this.appStore.APP_SETTINGS.caching.enabled;
    if (shouldCacheResponses) {
      // Cache url results
      return handler.handle(req).pipe(
        tap(event => this.cacheResults(req, event))
      );
    }
    return handler.handle(req);
  }

  cacheResults(req: HttpRequest<any>, event: HttpEvent<unknown>) {
    if (event.type === HttpEventType.Response) {
      console.log("Caching results for", req.url);
      this.cacheStore.urlCache[req.url] = event;
    }
  }
}
