import { Navigate, Route, Routes } from 'react-router-dom'
import useAuth from './useAuth'
import Login from './Login'
import Home from './Home'
import Faq from './Faq'
import UserManagement from './UserManagement'
import FileManagement from './FileManagement'

export default function AppRoutes() {
	const { user } = useAuth()
	const { admin, auditor } = user?.roles || {}

	return <>
		<Routes>
			{user && <>
				<Route path="/" element={<Home/>} />
				{admin && <Route path="users" element={<UserManagement/>} />}
				{auditor && <Route path="files" element={<FileManagement/>} />}
				<Route path="*" element={<Navigate to="/" />} />
			</>}
			{!user && <>
				<Route path="login" element={<Login/>} />
				<Route path="*" element={<Navigate to="/login"/>} />
			</>}
			{/* Free Routes */}
			<Route path="faq" element={<Faq/>} />
		</Routes>
	</>
}