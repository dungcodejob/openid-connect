import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { userActions } from './user.action';
import { selectLogInRequestHandled } from './user.feature';
import { UserState } from './user.state';

@Injectable({ providedIn: 'root' })
export class UserFacade {
  private readonly _store = inject<Store<UserState>>(Store);

  readonly logInRequestHandled$ = this._store.select(selectLogInRequestHandled);

  logIn(): void {
    this._store.dispatch(userActions.logIn());
  }
}
