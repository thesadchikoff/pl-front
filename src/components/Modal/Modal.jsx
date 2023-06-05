import React from 'react'
import ReactDOM from 'react-dom'
import './Modal.scss'
import Button from '../Button/Button'
const Modal = ({ title, children, text, fof, isShow }) => {
	return ReactDOM.createPortal(
		<div className='overlay'>
			<div
				ref={fof}
				className='modal mobile:absolute desktop:relative desktop:rounded-md mobile:bottom-0 mobile:rounded-b-none'>
				<div className='modal-title'>
					<h1 className='gilroy font-bold text-[20px]'>{title}</h1>
				</div>
				<div className='modal-body'>{children}</div>
				<div className='modal-footer'>
					<Button>{text}</Button>
				</div>
			</div>
		</div>,
		modal
	)
}

export default Modal
