import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: {
        name: "Md Asif Nawaz",
        email: "mdasifnawaz",
        phone: 7761054431,
        password: "",
        rePassword: ""
    }
}

const authSlicer = createSlice({
    name: 'auth',
    initialState,
    reducers: {

        //I think state will give the access of the entire redux store state or the entire state of its current slice.

        addUser: (state, action) => {
            let newUser = {
                name: action.payload.name,
                email: action.payload.email,
                phone: action.payload.phone,
                password: action.payload.password,
                rePassword: action.payload.rePassword
            }
            state.user = newUser;
        }
    }
})

export const { addUser } =authSlicer.actions // Here we are only exporting an object.
export default authSlicer.reducer;
