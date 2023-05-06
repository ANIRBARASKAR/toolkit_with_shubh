import {configureStore} from "@reduxjs/toolkit"
import userSlice from "./slice"
const store = configureStore({

    reducer :{
        allUser : userSlice
    }
})

export default store ;