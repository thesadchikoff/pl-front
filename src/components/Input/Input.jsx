import React, { useState } from 'react'
import './Input.scss'
import { FiInfo } from 'react-icons/fi'

const Input = ({ type = 'text', holder, id, label, value, onChange }) => {
	const [isError, setError] = useState(false)
	return (
		<div className='input-container'>
			{label && (
				<label className='input-label' htmlFor={id}>
					{label}
				</label>
			)}
			<input
				onChange={onChange}
				value={value}
				id={id}
				className={`input ${isError && 'error'}`}
				type={type}
				placeholder={holder}
			/>
			{isError && (
				<span className='error-message'>
					<FiInfo />
					Текст ошибки
				</span>
			)}
		</div>
	)
}

export default Input
