import React from "react";
import "./CartSummary.css";
import { products } from "../../mock/products";
const CartSummary = () => {
  console.log(products);
  return (
    <div>
      <header>
        <h2>İşlem Özeti</h2>
        <img src="" alt="close-btn" className="btn-close" />
      </header>
      <div className="products-wrapper">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <div className="product-content">
              <p>{product.title}</p>
              <p>{product.name}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="summary-wrapper">
        <h2>Geri Alım Teklifi</h2>
        <div>
          <p>Yeni Cihaz Değeri</p>
          <p>22.500 TL</p>
        </div>
        <div>
          <p>Eski Cihaz Değeri</p>
          <p>-2.500 TL</p>
        </div>
        <div>
          <p>Ek Kampanya Tutarı</p>
          <p>-2000 TL</p>
        </div>
        <div>
          <p>Toplam Teklif</p>
          <p>15.000 TL</p>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
