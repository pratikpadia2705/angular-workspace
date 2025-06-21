import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { SortPipe } from './sort.pipe';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DbserviceService } from './service/dbservice.service';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpinterceptorserviceService } from './service/interceptors/httpinterceptorservice.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    HttpClientInMemoryWebApiModule.forRoot(DbserviceService)
  ],
  providers: [
    // If authHeadersInterceptorInterceptor is a function, use 'useInterceptor' (Angular 16+)
    // import { provideHttpClient, withInterceptors } from '@angular/common/http';
    // and move this to imports: [provideHttpClient(withInterceptors([authHeadersInterceptorInterceptor]))]
    // Otherwise, if it's a class, ensure it's a class implementing HttpInterceptor:
    {provide: HTTP_INTERCEPTORS, useClass: HttpinterceptorserviceService , multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
