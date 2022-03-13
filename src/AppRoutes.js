import { Navigate, Route, Routes } from 'react-router-dom'
import useAuth from './useAuth'
import Login from './Login'
import Home from './Home'
import Faq from './Faq'
import AuthorizedRoutes from './AuthorizedRoutes'
import { ROLES } from './AuthProvider'
import UserManagement from './UserManagement'

export default function AppRoutes () {
	const { user } = useAuth()
	return <>
		<Routes>
			{!user && <>
				<Route path='login' element={<Login/>} />
				<Route path='*' element={<Navigate to='/login'/>}/>
			</>}
			{user && <>
				<Route path='/' element={<Home/>}/>
				<Route element={<AuthorizedRoutes roles={[ROLES.ADMIN]}/>}>
					<Route path='users' element={<UserManagement/>}/>
				</Route>
				<Route path='*' element={<Navigate to='/'/>}/>
			</>}
			{/* Free Routes */}
			<Route path='faq' element={<Faq/>} />
		</Routes>
	</>
}