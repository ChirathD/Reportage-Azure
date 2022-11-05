import React, {useRef, useEffect}from 'react'
import "./Modal.css"

const Modal = ({ setSubscriptionState, currentSubscriptionState }) => {

    const modelRef = useRef()
    const closeModal = e => {
        if (!modelRef.current.contains(e.target)) {
            setSubscriptionState(false)
        }
      };

      useEffect(() => {
        document.addEventListener("mousedown", closeModal);
        return () => document.removeEventListener("mousedown", closeModal);
      });

    return (
        <div className="modal-box" ref={modelRef} onClick={closeModal}>
            <h2 class="subscribe_title">NEWSLETTER</h2>
            <p class="subscribe_text">Subscribe to keep up with fresh news and exciting updates. We promise not to spam you!</p>
            <div class="form">
                <input type="email" class="form__email" placeholder="Enter your email address" />
                <button class="form__button">Subscribe</button>
            </div>
        </div>
    )
}

export default Modal
