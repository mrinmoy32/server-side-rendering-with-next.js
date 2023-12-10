import {createWrapper} from 'next-redux-wrapper'
import {createStore} from 'react-redux'
import data from './pages/API/data.json'

//create store
const store = (initialState = startState) => {
    return createStore(reducer, initialState)
}
