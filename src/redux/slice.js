import { createSlice } from "@reduxjs/toolkit";
import { addUserAction, getUserAction } from "./action";

 const userSlice = createSlice({
    name:'user',
    initialState : {getUserData:[] },

    reducers : {},
    extraReducers(builder){
        builder

        // 🌟🌟🌟🌟🌟🌟 Add data 

        .addCase(addUserAction.pending , (state) => {
            state.loading = true;
        })
        .addCase(addUserAction.fulfilled , (state , {payload}) => {
            state.loading = true;
            state.adduserData = true
        })
        .addCase(addUserAction.rejected , (state) => {
            state.loading = true;
        })

                // 🌟🌟🌟🌟🌟🌟 get data
                
                .addCase(getUserAction.pending , (state) => {
                    state.loading = true;
                })
                .addCase(getUserAction.fulfilled , (state , {payload}) => {
                    state.loading = true;
                    // here we need to add payload for get user's data
                    state.getUserData = payload
                })
                .addCase(getUserAction.rejected , (state) => {
                    state.loading = true;
                })

    }


})


export default userSlice.reducer