import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../slices/cartSlices";


function Cart() {
  const cartItems = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <table>
        
          {cartItems.map((item, index) => (
            <tr key={index}>
            
              <td><img src={item.image} alt={item.name} width="50" /></td>
              <td>{item.name} - ₹{item.price} x {item.quantity}</td>
              <td><button
                onClick={() => dispatch(removeFromCart(index))}
                style={{ marginLeft: 10, color: "red" }}
              >
                Remove
              </button></td>
              </tr>
            
          ))}
        
        </table>
      )}
      <h3>Total: ₹{total.toFixed(2)}</h3>
    </div>
  );
}

export default Cart;
