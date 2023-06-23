import React from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';


function Modal(props) {
const BackDrop = () => {
    return <Bd onClick={props.onClose} />
};
const Overlay = (props) => {
    return <Ol>{props.children}</Ol>
};
const portal = document.getElementById('overlays');

    return (
        <div>
            {createPortal(<BackDrop />, portal)}
            {createPortal(<Overlay>{props.children}</Overlay>, portal)}
        </div>
    )
}

const Bd = styled.div`
position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 12;
    background-color: rgba(0, 0, 0, 0.75);
  `;

const Ol = styled.div`
  position: fixed;
  top: 50%;
    left: 50%;
    transform: translate(-20%, -50%);
    width: 50%;
    height: auto;
    background-color: white;
    padding: 1rem;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
    z-index: 13;
    animation: slide-down 300ms ease-out forwards;
  @media (min-width: 768px) {
      /* width: 40rem; */
      left: calc(50% - 20rem);
  }
    `;


export default Modal;