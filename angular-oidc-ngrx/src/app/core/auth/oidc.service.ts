import { Injectable } from '@angular/core';
// import {
//   OidcClient,
//   OidcClientSettings,
//   UserManager as OidcUserManager,
//   UserManagerSettings,
//   User as OidcUser,
// } from 'oidc-client';
import { Observable, from } from 'rxjs';
import { OidcEvent } from './oidc-event.enum';

@Injectable()
export class OidcService {
  // private readonly _oidcUserManager: OidcUserManager;
  // private readonly _oidcClient: OidcClient;

  // get oidcUserMangager() {
  //   return this._oidcUserManager;
  // }

  // get oidcClient() {
  //   return this._oidcClient;
  // }

  // constructor() {
  //   const oidcSetting: UserManagerSettings = {
  //     client_id: 'ng-oidc-client-identity',
  //     response_type: 'id_token token',
  //     scope: 'openid profile offline_access api1',
  //     authority: 'https://ng-oidc-client-server.azurewebsites.net',
  //     redirect_uri: 'http://localhost:4200/callback.html',
  //     post_logout_redirect_uri: 'http://localhost:4200/signout-callback.html',
  //     silent_redirect_uri: 'http://localhost:4200/renew-callback.html',
  //     automaticSilentRenew: true,
  //   };

  //   this._oidcUserManager = new OidcUserManager(oidcSetting);
  //   this._oidcClient = new OidcClient(oidcSetting);
  // }

  // getOidcUser(): Observable<OidcUser | null> {
  //   return from(this._oidcUserManager.getUser());
  // }

  // removeOidcUser(): Observable<void> {
  //   return from(this._oidcUserManager.removeUser());

    
  // }

  // registerOidcEnent(event: OidcEvent, callback: (...ev: any[]) => void) {
  //   switch (event) {
  //     case OidcEvent.AccessTokenExpired:
  //       this._oidcUserManager.events.addAccessTokenExpired(callback);
  //       break;
  //     case OidcEvent.AccessTokenExpiring:
  //       this._oidcUserManager.events.addAccessTokenExpiring(callback);
  //       break;
  //     case OidcEvent.SilentRenewError:
  //       this._oidcUserManager.events.addSilentRenewError(callback);
  //       break;
  //     case OidcEvent.UserLoaded:
  //       this._oidcUserManager.events.addUserLoaded(callback);
  //       break;
  //     case OidcEvent.UserSessionChanged:
  //       this._oidcUserManager.events.addUserSessionChanged(callback);
  //       break;
  //     case OidcEvent.UserSignedOut:
  //       this._oidcUserManager.events.addUserSignedOut(callback);
  //       break;
  //     case OidcEvent.UserUnloaded:
  //       this._oidcUserManager.events.addUserUnloaded(callback);
  //       break;
  //     default:
  //       break;
  //   }
  // }

  // removeOidcEvent(event: OidcEvent, callback: (...ev: any[]) => void) {
  //   switch (event) {
  //     case OidcEvent.AccessTokenExpired:
  //       this._oidcUserManager.events.removeAccessTokenExpired(callback);
  //       break;
  //     case OidcEvent.AccessTokenExpiring:
  //       this._oidcUserManager.events.removeAccessTokenExpiring(callback);
  //       break;
  //     case OidcEvent.SilentRenewError:
  //       this._oidcUserManager.events.removeSilentRenewError(callback);
  //       break;
  //     case OidcEvent.UserLoaded:
  //       this._oidcUserManager.events.removeUserLoaded(callback);
  //       break;
  //     case OidcEvent.UserSessionChanged:
  //       this._oidcUserManager.events.removeUserSessionChanged(callback);
  //       break;
  //     case OidcEvent.UserSignedOut:
  //       this._oidcUserManager.events.removeUserSignedOut(callback);
  //       break;
  //     case OidcEvent.UserUnloaded:
  //       this._oidcUserManager.events.removeUserUnloaded(callback);
  //       break;
  //     default:
  //       break;
  //   }
  // }
}
