function Modal(props) {
  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="delete-btn btn cancel-btn" onClick={props.onClick}>
        Cancel
      </button>
      <button className="confirm-btn btn" onClick={props.onClick}>
        Confirm
      </button>
    </div>
  );
}
export default Modal;
