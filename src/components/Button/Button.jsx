import React from 'react'
import './Button.scss'

const Button = ({ children, icon, type, className }) => {
	const buttonType = type => {
		switch (type) {
			case 'primary':
				return <button className={`button ${className}`}>{children}</button>
			case 'outline':
				return (
					<button className={`outline-btn ${className}`}>{children}</button>
				)
			case 'nobag':
				return <button className={`nobag-btn ${className}`}>{children}</button>
			default:
				return <button className={`button ${className}`}>{children}</button>
		}
	}
	return <>{buttonType(type)}</>
}

export default Button
