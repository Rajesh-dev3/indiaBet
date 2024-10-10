import "./styles.scss"
const Modal = ({Element,closeModal}) => {
  return (
    <div className="modal" onClick={closeModal}>
        <div className="modal-content-box" onClick={(e)=>e.stopPropagation()}>
          <h3>Chip Setting <span onClick={closeModal}>x</span></h3>
            {
                Element
            }
            </div>
    </div>
  )
}

export default Modal