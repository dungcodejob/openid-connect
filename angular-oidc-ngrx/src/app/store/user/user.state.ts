
export interface UserState {
    loggedIn: boolean;
    logInRequestHandled: boolean;
}

export const initialState: UserState = {
    loggedIn: false,
    logInRequestHandled: false
}

