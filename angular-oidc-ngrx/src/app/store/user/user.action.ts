import { createAction, props } from "@ngrx/store";
import { ActionCreator } from "@ngrx/store/src/models";



const key = '[User]';
const UserKeys = {
    logIn: `${key} LogIn`,
    logInSuccess: `${key} LogIn Success`,
    logInFailure: `${key} LogIn Failure`
}

type ActionKey = keyof typeof UserKeys;


export const userActions =  {
    logIn: createAction(UserKeys.logIn),
    logInSuccess: createAction(UserKeys.logInSuccess),
    logInFailure: createAction(UserKeys.logInFailure)
}


userActions.logIn()