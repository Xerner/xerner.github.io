import { HttpEvent, HttpHandler, HttpRequest } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { HttpCacheClient } from "../http-cache-client.service";

/** Also see {@link HttpCacheClient} */
export class MockHttpHandler extends HttpHandler {
  override handle(req: HttpRequest<any>): Observable<HttpEvent<any>> {
    return of();
  }
}
