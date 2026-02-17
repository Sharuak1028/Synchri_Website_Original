import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingBag, ArrowLeft, Trash2, Minus, Plus } from 'lucide-react';
import '../Styles/CartPage.css';

export default function CartPage({ cart, onRemove, onUpdateQuantity }) {
  const navigate = useNavigate();

  const getNumericPrice = (p) => parseFloat(String(p).replace(/[$,]/g, '')) || 0;

  const subtotal = cart.reduce((sum, item) => 
    sum + (getNumericPrice(item.price) * (item.quantity || 1)), 0);
  const gst = subtotal * 0.18;
  const total = subtotal + gst;

  return (
    <div className="cart-page-container">
      {/* Back Button Container */}
      <div className="back-button-container">
        <button onClick={() => navigate("/products")} className="back-nav-pill">
          <ArrowLeft size={18} />
          <span>Continue Shopping</span>
        </button>
      </div>

      <div className="cart-layout-grid">
        <header className="page-title-section">
          <h1>Your <span>Cart</span></h1>
          <p>{cart.length} {cart.length === 1 ? 'item' : 'items'} in your cart</p>
        </header>

        <div className="main-content-area">
          <div className="items-column">
            {cart.map((item) => {
              const basePrice = getNumericPrice(item.price);
              return (
                <div key={item.id} className="product-card">
                  <div className="product-icon-box">
                    <ShoppingBag size={28} color="white" />
                  </div>
                  
                  <div className="product-info">
                    <h3>{item.name}</h3>
                    <p className="base-p">Base Price: ${basePrice.toFixed(2)}</p>
                    
                    <div className="action-row">
                      <div className="quantity-capsule">
                        <button onClick={() => onUpdateQuantity(item.id, (item.quantity || 1) - 1)}>
                          <Minus size={14} />
                        </button>
                        <span className="qty-num">{item.quantity || 1}</span>
                        <button onClick={() => onUpdateQuantity(item.id, (item.quantity || 1) + 1)}>
                          <Plus size={14} />
                        </button>
                      </div>
                      
                      <button className="trash-button" onClick={() => onRemove(item.id)}>
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>

                  <div className="price-display">
                    ${(basePrice * (item.quantity || 1)).toFixed(2)}
                  </div>
                </div>
              );
            })}
          </div>

          <aside className="summary-column">
            <div className="summary-card">
              <h2>Order Summary</h2>
              <div className="summary-row"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
              <div className="summary-row"><span>GST (18%)</span><span>${gst.toFixed(2)}</span></div>
              <div className="total-row">
                <span className="total-label">Total</span>
                <span className="total-price">${total.toFixed(2)}</span>
              </div>
              <button className="checkout-btn">Complete Secure Checkout</button>
              <p className="secure-text">Secure 256-Bit SSL Encrypted Payment</p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}