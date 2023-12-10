import { createWrapper } from 'next-redux-wrapper'
import { createStore } from 'react-redux'
import data from './pages/API/data.json'

//initial state
const startState = {
    cards: []
};

//Action creators
export const initialCards = () => {
    return {
        type: 'INITIAL_CARDS',
        cards: data
    }
}
export const addItem = (item) => {
    return {
        type: 'ADD',
        item
    }
}

//reducers
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INITIAL_CARDS':
            return {
                cards: action.cards
            }
        case 'ADD':
            return {
                ...state,
                card: [...state.cards, action.item]
            }
        default: return state
    }
}

//create store
const store = (initialState = startState) => {
    return createStore(reducer, initialState)
}

export const initStore = createWrapper(store);