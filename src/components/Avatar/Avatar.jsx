import React from 'react'
import './Avatar.scss'
const Avatar = ({ type = 'small', url }) => {
	const getSize = type => {
		switch (type) {
			case 'small':
				return 'w-[24px] h-[24px]'
			case 'large':
				return 'w-[36px] h-[36px]'
		}
	}
	return (
		<div className=''>
			<img
				className={`avatar ${getSize(
					type
				)} object-cover bg-no-repeat bg-center`}
				src={
					url
						? url
						: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
				}
				alt=''
			/>
		</div>
	)
}

export default Avatar
