import React from 'react'
import './Layout.scss'
import Sidebar from '../components/Sidebar/Sidebar'
import Comments from '../components/Comments/Comments'
import Header from '../components/Header/Header'
import TabBar from '../components/TabBar/TabBar'

const Layout = ({ children }) => {
	return (
		<div>
			<Header />
			<div className='py-10'>
				<div
					className='flex flex-row gap-[20px] desktop:container desktop:m-auto
				'>
					<Sidebar />
					<div className='flex-1'>
						<main className=' mobile:pb-[50px] desktop:pb-0'>{children}</main>
						<TabBar className={'mobile:block desktop:hidden'} />
					</div>
					<Comments />
				</div>
			</div>
		</div>
	)
}

export default Layout
