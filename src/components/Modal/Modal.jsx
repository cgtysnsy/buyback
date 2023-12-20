import React from "react";

const Modal = () => {
  return <div>Modal</div>;
};

export default Modal;

// import React from 'react';
// import './Modal.css'; // Assuming you have a CSS file for styling

// const Modal = ({ isOpen, close }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="modal-overlay" onClick={close}>
//       <div className="modal-content" onClick={e => e.stopPropagation()}>
//         {/* Modal content here */}
//         <button onClick={close}>Close</button>
//       </div>
//     </div>
//   );
// };

// export default Modal;
