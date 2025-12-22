import { FiShoppingBag } from "react-icons/fi";
import "./cartItem.css";
import CartSummary from "../CartSummary/CartSummary";

function CartItem({
  cartItem,
  onIncrement,
  onDecrement,
  onRemove,
  totalAmount,
}) {
  const totalItemCount = cartItem.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="sidebar-container">
      <div className="sidebar-content">
        <div className="sidebar-header-contianer">
          <div className="sidebar-header">
            <FiShoppingBag className="sidebar-header-icon" />
            <h2 className="sidebar-header-title">Səbət</h2>
          </div>
          <p className="sidebar-num">{totalItemCount}</p>
        </div>
        {cartItem.length === 0 ? (
          <div className="sidebar-main-content">
            <span>
              <FiShoppingBag className="sidebar-main-icon" />
            </span>
            <h3>Səbət boşdur</h3>
            <p>Məhsul əlavə edin</p>
          </div>
        ) : (
          <CartSummary
            cartItem={cartItem}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onRemove={onRemove}
            totalAmount={totalAmount}
          />
        )}
      </div>
    </div>
  );
}

export default CartItem;
