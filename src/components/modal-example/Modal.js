import { render } from '@testing-library/react';
import React, { useState } from 'react';
import ReactDOM from "react-dom";
import RegisterForm from '../register-form/registerForm';

const modalDiv = document.getElementById('modal');
const Modal = () => {
    const [modalShow, updateShowModal] = useState(false);
    const toggleModal = () => {
        updateShowModal(!modalShow)
    }
    return (
        <div>
            This is my modal
            <button onClick={toggleModal}>Show / Hide</button>
            {!modalShow || ReactDOM.createPortal(<RegisterForm closeModal={() => updateShowModal(false)} />, modalDiv)}
        </div>
    )
}

export default Modal;