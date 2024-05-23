import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  AuthConfig,
  OAuthErrorEvent,
  OAuthEvent,
  OAuthService,
  OAuthSuccessEvent,
} from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';
import { EMPTY, catchError, from, mergeMap, of, tap } from 'rxjs';
import { authActions } from './auth.action';

export const authCodeFlowConfig: AuthConfig = {
  // Url of the Identity Provider
  issuer: 'https://idsvr4.azurewebsites.net',

  // URL of the SPA to redirect the user to after login
  redirectUri: window.location.origin + '/index.html',

  // The SPA's id. The SPA is registerd with this id at the auth-server
  // clientId: 'server.code',
  clientId: 'spa',

  // Just needed if your auth server demands a secret. In general, this
  // is a sign that the auth server is not configured with SPAs in mind
  // and it might not enforce further best practices vital for security
  // such applications.
  // dummyClientSecret: 'secret',

  responseType: 'code',

  // set the scope for the permissions the client should request
  // The first four are defined by OIDC.
  // Important: Request offline_access to get a refresh token
  // The api scope is a usecase specific one
  scope: 'openid profile email offline_access api',

  showDebugInformation: true,
};

@Injectable({ providedIn: 'root' })
export class AuthEffects {
  private readonly _actions$ = inject(Actions);
  private readonly _router = inject(Router);
  private readonly _oAuthService = inject(OAuthService);

  constructor() {
    this._oAuthService.configure(authCodeFlowConfig);
    this._oAuthService.setupAutomaticSilentRefresh(); // silent automated token refresh, otherwise your token gets outdated and will not be refreshed
  }

  listenOAuth$ = createEffect(() =>
    this._oAuthService.events.pipe(
      mergeMap((event: OAuthEvent) => {
        console.log(event);
        if (event instanceof OAuthErrorEvent) {
          return of(authActions.logInFailure());
        }
        if (
          event instanceof OAuthSuccessEvent &&
          event.type === 'token_received'
        ) {
          return of(authActions.logInSuccess());
        }

        return EMPTY;
      })
    )
  );

  logIn$ = createEffect(() =>
    this._actions$.pipe(
      ofType(authActions.logIn),
      mergeMap(() => {
        if (
          this._oAuthService.hasValidIdToken() &&
          this._oAuthService.hasValidAccessToken()
        ) {
          return of(authActions.logInSuccess());
        } else {
          return from(this._oAuthService.loadDiscoveryDocumentAndLogin()).pipe(
            tap((result) => {
              if (!result) {
                this._oAuthService.initCodeFlow();
              }
            }),
            mergeMap(() => EMPTY),
            catchError(() => of(authActions.logInFailure()))
          );
        }
      })
    )
  );

  // logInSuccess$ = createEffect(() =>
  //   this._actions$.pipe(ofType(userActions.logInSuccess))
  // );

  logInFailure$ = createEffect(
    () =>
      this._actions$.pipe(
        ofType(authActions.logInFailure),
        tap(() => this._router.navigate(['no-access']))
      ),
    { dispatch: false }
  );

  private _configure(): void {
    this._oAuthService.configure(authCodeFlowConfig);
    this._oAuthService.tokenValidationHandler = new JwksValidationHandler();
    // this._oAuthService.setupAutomaticSilentRefresh();
    // this._oAuthService.loadDiscoveryDocumentAndTryLogin();
    this._oAuthService.tryLoginImplicitFlow()
  }
}
