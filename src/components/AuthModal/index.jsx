import React from 'react'
import { useAuthContext } from '../Context/AuthContext';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const AuthModal = () => {
  const {showModal,handleShowModal,handleCloseModal} = useAuthContext();
  const closeClick = (e) => {
    e.stopPropagation();
    handleCloseModal();
  }

  return (
    <div className={`modal modallogin ${!!showModal ? "open" : "" }`}>
    <div className="modal__wrapper">
      <div onClick={closeClick} className="modal__wrapper-close">
        <img src="/img/close_icon.svg" alt="CFD Register" />
      </div>
      {
        showModal === "login" && (
        <LoginForm/>
        )
      }
      {
        showModal === "register" &&(
          <RegisterForm/>
        )
      }
    </div>
    <div onClick={closeClick}  className="modal__overlay" />
  </div>
  )
}

export default AuthModal