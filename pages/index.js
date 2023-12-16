import React from 'react'

import CardsView from './CardsView'
import store from './app/store'
import { Provider } from 'react-redux'

function index() {

    return (
        <Provider store={store}>
            <CardsView />
        </Provider>
    )
}

export default index