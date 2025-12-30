import { useDispatch } from "react-redux";
import "./CartItem.css";
import {
  decrementQuantity,
  increaseQuantity,
  removeFromCart,
} from "../../store/slices/cartSlices";

function CartItem({ item }) {
  const dispatch = useDispatch();
  return (
    <div className="cartItem-container">
      <h3>{item.name}</h3>

      <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
      <p>{item.quantity}</p>
      <button onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
      <button onClick={() => dispatch(removeFromCart(item.id))}>Sil</button>
    </div>
  );
}

export default CartItem;
