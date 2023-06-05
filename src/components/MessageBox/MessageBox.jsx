import React from 'react'
import { FiInfo } from 'react-icons/fi'
import './MessageBox.scss'

const MessageBox = ({ text }) => {
	return (
		<div className='box-wrapper'>
			<FiInfo className='text-[#1D4FFF] desktop:text-[40px] mobile:text-[50px]' />

			<span className='text-[#1D4FFF] font-medium desktop:text-[14px] mobile:text-[12px]'>
				{text}
			</span>
		</div>
	)
}

export default MessageBox
