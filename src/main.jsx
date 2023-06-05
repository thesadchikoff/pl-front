import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from './redux/store'
import {QueryClient} from 'react-query'
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
	<>
		<BrowserRouter>
			
			<Provider store={store}>
				<App />
			</Provider>
		</BrowserRouter>
	</>
)
