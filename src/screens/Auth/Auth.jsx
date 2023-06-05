import React, { useState } from 'react'
import Input from '../../components/Input/Input'
import { message } from 'antd'
import Button from '../../components/Button/Button'
import { Link, Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserData, selectIsAuth } from '../../redux/slices/auth'

const Auth = () => {
	const isAuth = useSelector(selectIsAuth)
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const dispatch = useDispatch()
	const onSubmit = async e => {
		e.preventDefault()
		const data = await dispatch(fetchUserData({ email, password }))
		if (!data.payload) {
			return alert('Не удалось авторизоваться')
		}
		if ('accessToken' in data.payload) {
			console.log(data.payload)
			localStorage.setItem('token', data.payload.accessToken)
			message.info(`С возвращением, ${data.payload.item.name}`)
		}
	}
	if (isAuth) {
		return <Navigate to={'/'} />
	}
	return (
		<div className='w-full desktop:px-0 mobile:px-10'>
			<h1 className='text-center font-bold'>Авторизация</h1>
			<form className='py-10' onSubmit={onSubmit}>
				<div className='flex flex-col gap-5'>
					<Input
						onChange={e => setEmail(e.target.value)}
						holder={'Введите Вашу почту'}
						type='mail'
					/>
					<Input
						onChange={e => setPassword(e.target.value)}
						holder={'Введите пароль'}
						type='password'
					/>
					<Button>Войти</Button>
					<span className='text-center text-xs font-semibold'>
						Нет аккаунта?{' '}
						<Link className='text-blue-600 underline'>Зарегистрируйся!</Link>
					</span>
				</div>
			</form>
		</div>
	)
}

export default Auth
