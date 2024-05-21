import { provideHttpClient } from '@angular/common/http';
import {
  APP_INITIALIZER,
  ApplicationConfig,
  inject,
  isDevMode,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { UserEffects, UserFacade, userFeature } from '@store/user';
import { provideOAuthClient } from 'angular-oauth2-oidc';
import { filter, tap } from 'rxjs';
import { routes } from './app.routes';

function initializeOAuth() {
  const userFacade = inject(UserFacade);

  return () => {
    userFacade.logIn();
    return userFacade.logInRequestHandled$.pipe(
      tap(value => console.log(value)),
      filter(Boolean));
  };
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    provideStore(),
    provideState(userFeature),
    provideEffects(UserEffects),
    provideOAuthClient(),
    provideStoreDevtools({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
    }),

    {
      provide: APP_INITIALIZER,
      useFactory: initializeOAuth,
      multi: true,
    },
  ],
};
