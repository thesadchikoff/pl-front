import React, { useState } from 'react'
import { FiInfo } from 'react-icons/fi'

const Textarea = ({ holder, id, label, onChange, value }) => {
	const [isError, setError] = useState(false)
	return (
		<div className='input-container'>
			{label && (
				<label className='input-label' htmlFor={id}>
					{label}
				</label>
			)}
			<textarea
				id={id}
				onChange={onChange}
				value={value}
				className={`input ${isError && 'error'}`}
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

export default Textarea
