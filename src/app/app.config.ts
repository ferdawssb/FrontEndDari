import {ApplicationConfig, Injectable, NgModule} from '@angular/core';
import { provideRouter } from '@angular/router';

import {HTTP_INTERCEPTORS, HttpClient, provideHttpClient} from '@angular/common/http';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { AppHttpInterceptor } from './interseptors/app-http.interceptor';

// @ts-ignore
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
   {provide : HTTP_INTERCEPTORS , useClass : AppHttpInterceptor ,multi : true }
  ]
};

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }
}
