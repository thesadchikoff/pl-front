import React from 'react'
import Avatar from '../Avatar/Avatar'
import { FiClock } from 'react-icons/fi'
import { Tooltip } from 'antd'
import fire from '../../assets/icons/fire.svg'
import Eye from '../../UI/Fire'
import Share from '../../UI/Share'
import Like from '../../UI/Like'
import Repost from '../../UI/Repost'
import Comment from '../../UI/Comment'
import {Link} from "react-router-dom";

const PostItem = ({ poem }) => {
	return (
		<div className='w-full desktop:rounded-lg bg-white'>
			<img
				className='desktop:rounded-t-lg object-cover bg-no-repeat bg-center w-full h-[300px]'
				src={poem.preview_url}
				alt=''
			/>
			<div className='desktop:px-[30px] mobile:px-[20px] py-[15px] flex flex-col gap-4'>
				<div className='w-full flex justify-between items-center'>
					<h1 className='gilroy desktop:text-[30px] mobile:text-[24px] font-black'>
						{poem.title}
					</h1>
					<span className='font-semibold opacity-[0.6]'>{poem.category}</span>
				</div>
				<div className='flex items-center justify-between'>
					<Link to={`/u/${poem.author.id}`}>
						<div className='flex gap-2 items-center'>
							<Avatar type='large' url={poem.author.avatar} />
							<div className='flex flex-col'>
							<span className='font-medium text-[14px] flex items-center gap-2'>
								{poem.author.name + ' ' + poem.author.surname}
								{poem.author.is_premium && <img src={fire} alt='' />}
							</span>
								<span className='text-gray-400 text-xs'>{poem.author.role}</span>
							</div>
						</div>
					</Link>
					<div className='flex flex-col items-end cursor-default'>
						<Tooltip title='Время прочтения'>
							<div className='flex items-center gap-2 text-slate-600'>
								<span className='text-[14px] font-medium'>
									{poem.reading_time}
								</span>
								<FiClock className='text-[16px]' />
							</div>
						</Tooltip>
						<span className='text-[12px] text-slate-600'>3 дня назад</span>
					</div>
				</div>
			</div>
			<div className='desktop:px-[30px] mobile:px-[20px] py-[15px] border-t w-full flex items-center justify-between'>
				<div className='flex items-center gap-5'>
					<Like />
					<Comment />
					<Share />
					<Repost />
				</div>
				<div className='flex items-center gap-2 text-[#aaa]'>
					<span className='text-[14px]'>{poem.views}</span>
					<Eye />
				</div>
			</div>
		</div>
	)
}

export default PostItem
