import { useDispatch, useSelector } from "react-redux";
import "./cart.css";
import Cartİtem from "../CartItem/CartItem";
import { useEffect } from "react";
import { calculateTotals, clearCart } from "../../carts/cartSlice";
function Cart() {
  const { cartItems, totalQuantity, totalPrice } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);

  return (
    <div className="basket">
      <div className="basket-container">
        <h1 className="basket-title">Səbət</h1>
        <p className="basket-num">{totalQuantity}</p>
      </div>

      {cartItems.length === 0 ? (
        <div className="basket-empty-content">Bu səhifə boşdur</div>
      ) : (
        <>
          {cartItems.map((item) => (
            <Cartİtem key={item.id} item={item} />
          ))}
          <div className="total">
            <h3>Cəmi: {totalPrice}</h3>
            <button className="btn" onClick={() => dispatch(clearCart())}>
              Clear All
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
