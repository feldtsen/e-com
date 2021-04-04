import './modal.styles.scss';

const Modal = ({back, children}) =>
{


   return(
      <div className='modal'
           onClick={back}
      >
         {children}
      <div className="modal--background"/>
      </div>
   )
}

export default Modal;