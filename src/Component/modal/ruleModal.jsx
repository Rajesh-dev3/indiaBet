import "./styles.scss"
export const RuleModal = ({Element,closeModal}) => {
  return (
    <div className="modal2" onClick={closeModal}>
        {Element}
    </div>
  )
}

export default RuleModal

export const RuleModal2 = ({Element,closeModal}) => {
  return (
    <div className="modal2" onClick={closeModal}>
       {Element}
    </div>
  )
}

