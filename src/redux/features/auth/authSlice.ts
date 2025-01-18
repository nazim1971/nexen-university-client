import { createSlice } from "@reduxjs/toolkit";

type TAUthState = {
    user: null | object;
    token: null | string;
}

const initialState: TAUthState = {
    user: null,
    token: null,
}

const authSlice = createSlice({
    name: 'auth'
})