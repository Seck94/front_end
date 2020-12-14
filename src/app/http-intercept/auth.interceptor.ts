import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConnexionService } from '../services/connexion.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private connexionSer: ConnexionService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (this.connexionSer.islogin()) {
      const token = this.connexionSer.getToken();
      request = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + token)
      });
    }
    return next.handle(request);
  }
}
