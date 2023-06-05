import React from 'react'
import HomeIcon from '../../UI/HomeIcon'
import Notification from '../../UI/Notification'
import Profile from '../../UI/Profile'
import './TabBar.scss'
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectIsAuth } from '../../redux/slices/auth'
const TabBar = ({ className }) => {
	const auth = useSelector(state => state.auth)
	const isAuth = useSelector(selectIsAuth)
	return (
		<div className={`bar bar--bottom ${className}`}>
			<div className='tabbar'>
				<div className='tabbar__content text-xs container'>
					<NavLink to={'/'} className='flex flex-col items-center gap-1'>
						<HomeIcon />
						<span>Главная</span>
					</NavLink>
					<NavLink
						to={'/notification'}
						className='flex flex-col items-center gap-1'>
						<Notification />
						<span>Уведомления</span>
					</NavLink>
					{!isAuth ? (
						<NavLink to={'/auth'} className='flex flex-col items-center gap-1'>
							<Profile />
							<span>Профиль</span>
						</NavLink>
					) : (
						<NavLink
							to={'/profile'}
							className='flex flex-col items-center gap-1'>
							<img
								className='w-[24px] h-[24px] rounded-full border-2 border-blue-800 object-fill'
								src={auth.item.avatar}
								alt=''
							/>
							<span>{auth.item.name}</span>
						</NavLink>
					)}
				</div>
			</div>
		</div>
	)
}

export default TabBar
