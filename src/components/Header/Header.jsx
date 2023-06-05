import React from 'react'
import logo from '../../assets/icons/logo.svg'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import Fire from '../../UI/Fire'
import { useSelector } from 'react-redux'
import { selectIsAuth } from '../../redux/slices/auth'

const Header = () => {
	const auth = useSelector(state => state.auth)
	const isAuth = useSelector(selectIsAuth)
	return (
		<header className='w-full bg-white h-[50px] p-[30px] flex flex-col justify-center items-center'>
			<div className='container flex items-center justify-between'>
				<Link to={'/'}>
					<img src={logo} alt='' />
				</Link>

				{!isAuth ? (
					<Link to={'/auth'} className={'mobile:hidden desktop:block'}>
						<Button>Войти</Button>
					</Link>
				) : (
					<Link
						to={'/profile'}
						className={
							'mobile:hidden desktop:flex items-center gap-3 bg-slate-100 px-[20px] py-[5px] rounded-lg'
						}>
						<span>{auth.item.name}</span>
						<img
							className='w-[28px] h-[28px] rounded-full border-2 border-blue-800'
							src={auth.item.avatar}
							alt=''
						/>
					</Link>
				)}
			</div>
		</header>
	)
}

export default Header
