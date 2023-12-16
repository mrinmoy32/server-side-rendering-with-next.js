import { createSlice } from "@reduxjs/toolkit";
import data from './API/data.json'

const initialState = {
    cards: []
}

const cardsSlice = createSlice({
    name: "cards",
    initialState,
    reducers: {
        initialCards: (state) => {
            state.cards= data
        },
        addItem: (state, action) => {
            state.cards = [...state.cards, action.payload]
        }
    }

})

export default cardsSlice.reducer;
export const {initialCards, addItem} = cardsSlice.actions;