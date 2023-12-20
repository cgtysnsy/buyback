import React from "react";
import "./CartSummary.css";
import { products } from "../../mock/products";
const CartSummary = ({ openModal }) => {
  return (
    <div className="summary-content-wrapper">
      <header>
        <span className="heading-cart-bold-black">İşlem Özeti</span>
        <button className="btn-close" onClick={openModal}>
          {" "}
          <img
            src="/assets/svg/close.svg"
            alt="close-btn"
            className="btn-close"
          />
        </button>
      </header>
      <div className="content">
        <div className="products-wrapper">
          {products.map((product) => (
            <div key={product.id} className="product">
              <img src={product.image} alt={product.name} />
              <div className="product-content">
                <p className="text-medium-grey">{product.title}</p>
                <p className="text-small-bold-black">{product.name}</p>
                <p className="text-small-bold-black">{product.variant}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="summary-wrapper">
          <span className="heading-cart-bold-black">Geri Alım Teklifi</span>
          <div className="item-wrapper">
            <p className="text-medium-grey">Yeni Cihaz Değeri</p>
            <p className="text-small-bold-black">22.500 TL</p>
          </div>
          <div className="item-wrapper">
            <p className="text-medium-grey">Eski Cihaz Değeri</p>
            <p className="text-small-bold-black">-2.500 TL</p>
          </div>
          <div className="item-wrapper">
            <p className="text-medium-grey">Ek Kampanya Tutarı</p>
            <p className="text-small-bold-black">-2000 TL</p>
          </div>
          <div className="item-wrapper">
            <p className="text-small-black">Toplam Teklif</p>
            <p className="text-gradient-medium">15.000 TL</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
