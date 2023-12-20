import React, { useState } from "react";
import "./CopyClipboard.css";

const CopyClipboard = ({ number }) => {
  const [copySuccess, setCopySuccess] = useState("");

  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(number)
      .then(() => {
        setCopySuccess("Copied!");
        setTimeout(() => setCopySuccess(""), 2000);
      })
      .catch((err) => console.error("Failed to copy: ", err));
  };

  return (
    <>
      <p className="ref-num-text">{number}</p>
      <button className="copy-icon" onClick={handleCopyClick}>
        <img src="/assets/svg/copy.svg" alt="copy icon" />
      </button>
      {copySuccess && <span className="text-info-grey">{copySuccess}</span>}
    </>
  );
};

export default CopyClipboard;
