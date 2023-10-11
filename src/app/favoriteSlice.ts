import { PayloadAction,createSlice } from "@reduxjs/toolkit";
import { BookItem } from "../modules/BookModule";

const favoriteSlice = createSlice({
    name: "favorite",
    initialState: {
        favorite: []
        
        
    },
    reducers: {
        addToFavorite : (state, action: PayloadAction<BookItem>) => {
            state.favorite.push(action.payload)
            console.log(state.favorite)
        }
    }
})

export default favoriteSlice.reducer;
export const {addToFavorite} = favoriteSlice.actions