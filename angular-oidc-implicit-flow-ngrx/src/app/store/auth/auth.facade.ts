import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { authActions } from './auth.action';
import { selectLogInRequestHandled } from './auth.feature';
import { AuthState } from './auth.state';

@Injectable({ providedIn: 'root' })
export class AuthFacade {
  private readonly _store = inject<Store<AuthState>>(Store);

  readonly logInRequestHandled$ = this._store.select(selectLogInRequestHandled);



  logIn(): void {
    this._store.dispatch(authActions.logIn());
  }
}
