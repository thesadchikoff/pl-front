import React from 'react'

const Comments = () => {
	return (
		<div className='w-[200px] h-[470px] bg-white rounded-lg p-5 flex-0 desktop:block mobile:hidden'>
			<h1 className='font-medium'>Комментарии</h1>
			<div className='flex flex-col items-center justify-center w-full h-full text-center'>
				<span className='text-[11px] font-semibold opacity-[0.6]'>
					Комментарии отсутсвуют
				</span>
			</div>
		</div>
	)
}

export default Comments
