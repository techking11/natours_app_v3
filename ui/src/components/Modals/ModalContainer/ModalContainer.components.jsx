export default function ModalContainer({ showModal, openModal, children }) {

  return (
    <div className={`all__modal--container ${showModal ? '' : 'hidden'}`} >
      <div id="alert-modal-hook"></div>
      <button id="backdrop-hook" onClick={openModal}>
        <div className="backdrop"></div>
      </button>
      <div id="modal-hook">
        {children}
      </div>
    </div >
  )
}