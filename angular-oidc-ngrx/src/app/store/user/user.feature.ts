import { createFeature, createReducer, on } from '@ngrx/store';
import { UserState, initialState } from './user.state';
import { userActions } from './user.action';
import { StoreKey } from '@shared/constants';


export const userFeature = createFeature({
  name: StoreKey.User,
  reducer: createReducer(
    initialState,
    on(userActions.logInSuccess, (state: UserState) => ({
      ...state,
      loggedIn: true,
      logInRequestHandled: true,
    })),
    on(userActions.logInFailure, (state: UserState) => ({
      ...state,
      loggedIn: false,
      logInRequestHandled: true,
    }))
  ),
});
export const { selectLogInRequestHandled, selectLoggedIn, selectUserState } =
  userFeature;
