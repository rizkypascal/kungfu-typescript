import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export interface MovieState {
    title: string
}

const initialState: MovieState = {
    title: "Movie Catalogue",
}

export const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        setPageTitle: (state, action: PayloadAction<string>) => {
            state.title = action.payload
        }
    }
});

export const { setPageTitle } = movieSlice.actions;
export default movieSlice.reducer;
