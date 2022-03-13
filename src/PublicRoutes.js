import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './Login'
import Faq from './Faq'

export default function PublicRoutes() {
	return <Routes>
		<Route path={'login'} element={<Login/>}/>
		<Route path={'faq'} element={<Faq/>}/>
		<Route path='*' element={<Navigate to='/login'/>}/>
	</Routes>
}