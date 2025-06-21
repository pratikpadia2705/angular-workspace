import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, finalize, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpinterceptorserviceService implements HttpInterceptor {

  constructor() { }
  intercept(request: HttpRequest<any>, httphandler: HttpHandler): Observable<HttpEvent<any>> {

    console.log('Intercepting request in HttpinterceptorserviceService:', request);

    request = request.clone({
      setHeaders: {
        Authorization: `Bearer your-token`,
      },
    });

    const observable = httphandler.handle(request).pipe(

      catchError(error => {
        console.error('Error occurred:', error);
        throw error;
      }),
      finalize(() => {
        console.log('Request completed:', request.url);

      })

    );
    return observable;
  }
}
