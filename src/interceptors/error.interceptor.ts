import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpStatusCode } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, of, throwError } from "rxjs";
import { AppStore } from "../services/stores/app.store";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    public appStore: AppStore,
  ) { }

  intercept(req: HttpRequest<any>, handler: HttpHandler): Observable<HttpEvent<any>> {
    return handler.handle(req).pipe(catchError((event: HttpErrorResponse, caught) => {
      if (event.status == HttpStatusCode.Ok) {
      }
      if (event.status == HttpStatusCode.Forbidden) {
        var message = event.error.message;
        if (message !== undefined) {
          if (typeof message === 'string' && message.includes('API rate limit exceeded')) {
            this.appStore.errors.apiLimitError.set(true);
          }
        }
      }
      return throwError(() => event);
    }));
  }
}
