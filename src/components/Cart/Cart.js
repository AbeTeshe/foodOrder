import {useContext} from 'react';
import CartContext from '../../store/cart.context';

import Modal from "../UI/Modal";
import "./Cart.css";

const Cart = (props) => {
    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItems = <ul className="cart-items">{
        cartCtx.items.map((item) => <li>{item.name}</li>)}</ul>;


    return (
        <Modal onClick={props.onClose}> 
            {cartItems}
            <div className="total">
                <span>Total Amount</span>
                <span>${totalAmount}</span>
            </div>
            <div className="actions">
                <button className="button-alt" onClick={props.onClose}>Close</button>
                {hasItems && <button className="button">Order</button>}
            </div>
        </Modal>
    );
};

export default Cart;