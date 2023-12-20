import React from "react";
import "./Success.css";
import TradeInfo from "../TradeInfo/TradeInfo";
import { products } from "../../mock/products";
import CopyClipboard from "../CopyClipboard/CopyClipboard";

const Success = ({ setLocation }) => {
  return (
    <div className="success-wrapper">
      <button
        className="btn-back"
        onClick={() => setLocation("MainPage")}
      ></button>
      <div className="succsess-content">
        <div className="success-header">
          <span className="heading-large-bold-black">
            Geri alım talebinizi aldık.
          </span>
          <span className="text-gradient-large">
            Şimdi yeni cihazınızı almalısınız.
          </span>
          <span className="text-info-grey">
            Geri alım teklifinden faydalanmak için yeni cihazınızın satın alma
            işlemini <b>24 saat içerisinde tamamlanız gerekmektedir.</b> Aksi
            halde, cihaz yenileme talebiniz geçersiz olacaktır.
          </span>
        </div>
        <div className="success-summary">
          <span className="heading-small-bold-black">
            Değiş- Tokuş İşlem Özeti
          </span>
          <div className="success-summary-content">
            {products.map((product) => (
              <div key={product.id} className="product-list">
                <img src={product.image} alt={product.name} />
                <div className="product-content">
                  <p className="text-medium-grey">{product.title}</p>
                  <p className="text-small-bold-black">{product.name}</p>
                  <p className="text-small-bold-black">{product.variant}</p>
                </div>
              </div>
            ))}
            <div className="sum-wrapper">
              <span className="text-medium-grey">Toplam Teklif</span>
              <span className="text-small-bold-black">15.000 TL</span>
            </div>
          </div>
        </div>
        <div className="success-ref">
          <span className="heading-small-bold-black">Referans Numarası</span>
          <div className="ref-number-wrapper">
            <CopyClipboard number="1234 - 5678 -9012" />
          </div>
          <span className="text-info-grey">
            Geri Alım Sürecinizi referans numaranız ile takip edebilirsiniz.
          </span>
        </div>
      </div>
      <TradeInfo />
    </div>
  );
};

export default Success;
