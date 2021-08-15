import './modal.styles.scss';

import ReactDOM from 'react-dom';

function Modal(props) {
  const { isNotShowing, onClose, children } = props;
  if (isNotShowing) {
    return null;
  }

  return ReactDOM.createPortal((
    <>
      <div className='overlay'></div>
      <div className='content'>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </>
  ), document.getElementById('modal'));
}

export default Modal;