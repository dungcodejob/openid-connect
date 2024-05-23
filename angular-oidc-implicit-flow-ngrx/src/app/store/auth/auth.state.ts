
export interface AuthState {
    loggedIn: boolean;
    logInRequestHandled: boolean;
}

export const initialState: AuthState = {
    loggedIn: false,
    logInRequestHandled: false
}

