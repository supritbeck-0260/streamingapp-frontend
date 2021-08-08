import React, { useRef } from 'react';
import '../Css/modal.css'
const Modal = ({close,children}) => {
    const backdrop = useRef(null)
    const clickhandler = e =>(e.target === backdrop.current) && close();
    return (
        <div className='Modal_backdrop' onClick={clickhandler} ref={backdrop}>
            <div className='Modal_container'>
                {children}
            </div>
        </div>
    );
};

export default Modal;