import { createFeature, createReducer, on } from '@ngrx/store';
import { StoreKey } from '@shared/constants';
import { authActions } from './auth.action';
import { AuthState, initialState } from './auth.state';

export const authFeature = createFeature({
  name: StoreKey.Auth,
  reducer: createReducer(
    initialState,
    on(authActions.logInSuccess, (state: AuthState) => ({
      ...state,
      loggedIn: true,
      logInRequestHandled: true,
    })),
    on(authActions.logInFailure, (state: AuthState) => ({
      ...state,
      loggedIn: false,
      logInRequestHandled: true,
    }))
  ),
});
export const { selectLogInRequestHandled, selectLoggedIn, selectAuthState } =
  authFeature;
