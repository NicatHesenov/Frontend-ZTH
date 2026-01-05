import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../../carts/cartSlice";
import "./cartItem.css";
function Cartİtem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="cartItem-container">
      <div className="cartItem-contant">
        <h3>{item.name}</h3>
        <p>{item.price * item.quantity}</p>
        <button
          className="btn"
          onClick={() => dispatch(increaseQuantity(item.id))}
        >
          +
        </button>
        <p>{item.quantity}</p>
        <button
          className="btn"
          onClick={() => dispatch(decreaseQuantity(item.id))}
        >
          -
        </button>
        <button
          className="btn"
          onClick={() => dispatch(removeFromCart(item.id))}
        >
          sil
        </button>
      </div>
    </div>
  );
}

export default Cartİtem;
