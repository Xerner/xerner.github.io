import { HttpEvent, HttpHandler, HttpRequest } from "@angular/common/http";
import { Observable, of } from "rxjs";

export class MockHttpHandler extends HttpHandler {
  override handle(req: HttpRequest<any>): Observable<HttpEvent<any>> {
    return of();
  }
}
