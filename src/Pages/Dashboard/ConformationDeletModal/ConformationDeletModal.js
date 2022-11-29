import React from "react";

const ConformationDeletModal = ({
  title,
  message,
  closeModal,
  modalData,
  successButtonName,
  successAction,
}) => {
  return (
    <div>
      <input
        type="checkbox"
        id="conformation-delet-modal"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="py-4">{message}</p>
          <div className="modal-action">
            <label
              onClick={() => successAction(modalData)}
              htmlFor="conformation-delet-modal"
              className="btn btn-secondary"
            >
              {successButtonName}
            </label>
            <button onClick={closeModal} className="btn btn-outline">
              No !
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConformationDeletModal;
