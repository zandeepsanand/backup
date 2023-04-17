import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(this.addAuthHeader(request)).pipe(
      catchError((error) => {
        if (error.status === 401) {
          return this.authService.refreshToken().pipe(
            switchMap(() => {
              return next.handle(this.addAuthHeader(request));
            }),
            catchError((error) => {
              // this.authService.logout(); // logout the user if refresh token fails
              console.log(error);
              
              return throwError(error);
            })
          );
        } else {
          return throwError(error);
        }
      })
    );
  }

  private addAuthHeader(request: HttpRequest<any>): HttpRequest<any> {
    const accessToken = this.authService.getAccessToken();
    if (accessToken) {
      return request.clone({
        setHeaders: {
          Authorization: `${accessToken}`
        }
      });
    } else {
      return request;
    }
  }
}
