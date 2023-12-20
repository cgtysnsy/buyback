import React, { useState, useRef, useEffect } from "react";
import "./Modal.css";

const options = ["Teklifi beğenmedim", "Başka bir firmadan teklif aldım"];

const Modal = ({ modalHandler, closeModal }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setFilteredOptions(
      options.filter((option) =>
        option.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, options]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  if (!modalHandler) return null;

  return (
    <div className="modal-overlay">
      <div className="model-content-wrapper">
        <div className="modal-head" onClick={(e) => e.stopPropagation()}>
          <button className="btn-close" onClick={closeModal}>
            {" "}
            <img
              src="/assets/svg/close.svg"
              alt="close-btn"
              className="btn-close"
            />
          </button>
        </div>
        <div className="model-content">
          <span className="warning-cross">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 64 64"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M55.2189 12.5523C56.2603 11.5109 56.2603 9.82245 55.2189 8.78105C54.1776 7.73965 52.4891 7.73965 51.4477 8.78105L32 28.2288L12.5523 8.78105C11.5109 7.73965 9.82245 7.73965 8.78105 8.78105C7.73965 9.82245 7.73965 11.5109 8.78105 12.5523L28.2288 32L8.78105 51.4477C7.73965 52.4891 7.73965 54.1776 8.78105 55.219C9.82245 56.2604 11.5109 56.2604 12.5523 55.219L32 35.7712L51.4477 55.219C52.4891 56.2604 54.1776 56.2604 55.219 55.219C56.2604 54.1776 56.2604 52.4891 55.219 51.4477L35.7712 32L55.2189 12.5523Z"
                fill="white"
              />
            </svg>
          </span>
          <span className="heading-medium-bold-black">
            İşleminiz henüz tamamlanmadı
          </span>
          <span className="text-info-medium-grey">
            Bize işlemi neden tamamlamak istemediğinizi söyleyebilir misiniz?
          </span>
          <div className="combobox-wrapper">
            <div ref={dropdownRef} className="dropdown">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => setIsDropdownOpen(true)}
                placeholder="Seçiniz"
              />
              {isDropdownOpen && (
                <ul className="dropdown-menu">
                  {filteredOptions.map((option, index) => (
                    <li
                      key={index}
                      onClick={() => {
                        setSearchTerm(option);
                        setIsDropdownOpen(false);
                      }}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className="btn-wrapper">
            <button className="btn-primary">Devam Et</button>
            <button className="btn-secondary">Çıkış</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
