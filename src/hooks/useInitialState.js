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
    }

    const removeFromCart = (payload) => () => {
        setState({
            ...state,
            cart: state.cart.filter(product => product.id !== payload.id),
            totalOrder: state.totalOrder - payload.price
        })
    }

    return { state, addToCart, removeFromCart }
}

export default useInitialState;