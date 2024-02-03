import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import {HttpClientModule, provideHttpClient, withFetch} from "@angular/common/http";

// @ts-ignore
bootstrapApplication(AppComponent,appConfig,{


  providers:[


  provideHttpClient(withFetch()),

  ]


} )
  .catch((err) => console.error(err));




