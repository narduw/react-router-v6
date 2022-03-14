import { Navigate, Route, Routes } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import Login from '../components/Login'
import Home from '../components/Home'
import Faq from '../components/Faq'
import UserManagement from '../components/UserManagement'
import FileManagement from '../components/FileManagement'

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