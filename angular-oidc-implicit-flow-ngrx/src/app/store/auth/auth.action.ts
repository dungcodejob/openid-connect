import { createAction } from '@ngrx/store';

const key = '[Auth]';
const AuthKeys = {
  logIn: `${key} LogIn`,
  logInSuccess: `${key} LogIn Success`,
  logInFailure: `${key} LogIn Failure`,
};

export const authActions = {
  logIn: createAction(AuthKeys.logIn),
  logInSuccess: createAction(AuthKeys.logInSuccess),
  logInFailure: createAction(AuthKeys.logInFailure),
};

