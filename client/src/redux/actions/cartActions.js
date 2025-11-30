import * as actionTypes from '../constants/cartConstants';
import axios from 'axios';

const URL = process.env.REACT_APP_BASE_URL || "https://ecommerce-mern-uh3u.onrender.com";

export const addToCart = (id, quantity) => async (dispatch) => {
    try { 
        const { data } = await axios.get(`${URL}/product/${id}`);
        dispatch({ 
            type: actionTypes.ADD_TO_CART, 
            payload: { ...data, quantity } 
        });
    } catch (error) {
        console.log('Error while calling cart API');
    }
};

export const removeFromCart = (id) => (dispatch) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
    });
};

export const increaseQuantity = (id) => (dispatch) => {
    dispatch({
        type: actionTypes.INCREASE_CART_QUANTITY,
        payload: id
    });
};

export const decreaseQuantity = (id) => (dispatch) => {
    dispatch({
        type: actionTypes.DECREASE_CART_QUANTITY,
        payload: id
    });
};
