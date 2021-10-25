import React, { useState } from "react";

const initialState = {
    cart:[],
    totalOrder:0
}

const useInitialState = () => {
    const [ state, setState ] = useState(initialState);

    const addToCart = (payload) => () => {
        setState({
            ...state,
            cart: [ ...state.cart, payload],
            totalOrder: state.totalOrder + payload.price
        })

        console.log('CONTEXT STATE: ', state);
    }

    return { state, addToCart }
}

export default useInitialState;