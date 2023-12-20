import React from "react";
import "./ProgressBar.css";
import Countdown from "../Countdown/Countdown";

const ProgressBar = ({ openModal, closeModal }) => {
  return (
    <div className="progress-wrapper">
      <header>
        <span className="heading-cart-bold-black">Şimdi sırada ne var?</span>
        <button className="btn-close" onClick={openModal}>
          {" "}
          <img
            src="/assets/svg/close.svg"
            alt="close-btn"
            className="btn-close"
          />
        </button>
      </header>
      <div className="next-steps-wrapper">
        <div className="steps-item">
          <img src="assets/svg/old-device.svg" alt="old device icon" />
          <span className="text-info-grey">
            Geri gönderim kiti ile eski cihazınızı bize gönderin.
          </span>
        </div>
        <div className="steps-item">
          <img src="assets/svg/test-icon.svg" alt="test icon" />
          <span className="text-info-grey">
            Cihaz testleri tamamlandıktan sonra size son teklifi sunacağız.
          </span>
        </div>
        <div className="steps-item">
          <img src="assets/svg/wallet-icon.svg" alt="wallet icon" />
          <span className="text-info-grey">
            Kabul etmeniz durumunda tutarı banka hesabınıza göndereceğiz.
          </span>
        </div>
      </div>
      <div className="countdown-wrapper">
        <Countdown />
        <span className="text-info-grey">
          sonra yeni cihaz satın alımı için yönlendireceksiniz.
        </span>
      </div>
      <div className="progress-btn-wrapper">
        <button className="btn-primary">
          Yeni cihaz için alışverişe devam et
        </button>
        <div className="btn-sec-wrapper">
          <button className="btn-secondary">Sıkça Sorulan Sorular </button>
          <img src="assets/svg/forward-icon.svg" alt="faq link icon" />
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
