import { useSelector, useDispatch } from "react-redux";
import CartItem from "../Cartİtem/CartItem";
import "./cart.css";
import { useEffect } from "react";
import { calculateTotal, clearCart } from "../../store/slices/cartSlices";

function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log(cartItems);

  const { totalQuantity, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems, dispatch]);
  return (
    <div className="cart-container">
      <div className="cart-content">
        <div className="cart-header">
          <h1>Səbət</h1>
          <p>{totalQuantity}</p>
        </div>

        {cartItems?.length === 0 ? (
          <div className="cart-empty">Səhifə boşdur</div>
        ) : (
          <>
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
            <div className="cart-total">
              cəmi: {totalPrice}
              <button onClick={() => dispatch(clearCart())}>Clear</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
