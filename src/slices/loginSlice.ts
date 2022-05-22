import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface loginState {
    email: string;
    password: string;
    passwordConfirm: string;
    currentUser: any;
}

const initialState: loginState = {
    email: '',
    password: '',
    passwordConfirm: '',
    currentUser: {},
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers:{
        changeEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
        changePassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
        changePasswordConfirm: (state, action: PayloadAction<string>) => {
            state.passwordConfirm = action.payload;
        },
        setCurrentUser: (state, action: PayloadAction<any>) => {
            state.currentUser = action.payload;
        }
    }
})

export const { changeEmail, changePassword, changePasswordConfirm,  setCurrentUser } = loginSlice.actions;

export default loginSlice.reducer;