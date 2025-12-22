import { RiDeleteBin5Line } from "react-icons/ri";
import "./cartSummary.css";

function CartSummary({
  cartItem,
  onIncrement,
  onDecrement,
  onRemove,
  totalAmount,
}) {
  const totalItemCount = cartItem.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="summary-container">
      <div className="summary-cards">
        {cartItem.map((item) => (
          <div key={item.id} className="summary-card-item">
            <div className="summary-card-header">
              <h3 className="summary-card-title">{item.name}</h3>
              <RiDeleteBin5Line
                className="summary-card-delete"
                onClick={() => onRemove(item.id)}
                style={{ cursor: "pointer" }}
              />
            </div>

            <div className="summary-card-body">
              <div className="summary-card-counter">
                <button
                  className="summary-card-minus"
                  onClick={() => onDecrement(item.id)}
                >
                  -
                </button>
                <p className="summar-card-num">{item.quantity}</p>
                <button
                  className="summary-card-plus"
                  onClick={() => onIncrement(item.id)}
                >
                  +
                </button>
              </div>
              <p className="summary-card-total">
                {item.price * item.quantity} ₼
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="summary-footer">
        <div className="summary-footer-header">
          <h2 className="summary-footer-title">Məhsul sayı</h2>
          <p className="summary-footer-count">{totalItemCount}</p>
        </div>
        <div className="summary-footer-result">
          <h3 className="summary-footer-text">Cəmi məbləğ</h3>
          <p className="summary-footer-amount">{totalAmount} ₼</p>
        </div>
        <button className="summary-btn" disabled={cartItem.length === 0}>
          Sifarişi Tamamla
        </button>
      </div>
    </div>
  );
}

export default CartSummary;
