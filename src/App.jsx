import { Route, Routes } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAuthMe, selectIsAuth } from './redux/slices/auth'
import Home from './screens/Home/Home'
import Layout from './layout/Layout'
import Auth from './screens/Auth/Auth'
import User from "./screens/User/User.jsx";
import NotFound from "./screens/NotFound/NotFound";

function App() {
	const dispatch = useDispatch()
	const isAuth = useSelector(selectIsAuth)
	useEffect(() => {
		dispatch(fetchAuthMe())
	}, [])
	return (
		<Layout>
			<Routes>
				{/*Static Routes*/}
				<Route path='/' element={<Home />} />
				<Route path='/auth' element={<Auth />} />
				{/*Dynamic Routes*/}
				<Route path='/u/:id' element={<User />} />

				<Route path='*' element={<NotFound />} />
			</Routes>
		</Layout>
	)
}

export default App
