import { TestBed } from '@angular/core/testing';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

import { AppHttpInterceptor } from './app-http.interceptor';

describe('appHttpInterceptor', () => {
  const interceptor: HttpInterceptor = TestBed.inject(AppHttpInterceptor);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: AppHttpInterceptor, useClass: AppHttpInterceptor },
      ],
    });
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });
});
