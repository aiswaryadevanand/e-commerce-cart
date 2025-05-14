import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../slices/cartSlices";
import './cart.css'


function Cart() {
  const cartItems = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
  <h2>Your Cart</h2>
  {cartItems.length === 0 ? (
    <p>No items in cart.</p>
  ) : (
    <table className="cart-table">
      
      <tbody>
        {cartItems.map((item, index) => (
          <tr key={index}>
            <td>
              <img src={item.image} alt={item.name} className="cart-img" />
            </td>
            <td>
              {item.name} - ₹{item.price} x {item.quantity}
            </td>
            <td>
              <button
                onClick={() => dispatch(removeFromCart(index))}
                className="remove-btn"
              >
                Remove
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )}
  <h3 className="total-price">Total: ₹{total.toFixed(2)}</h3>
</div>

  );
}

export default Cart;
