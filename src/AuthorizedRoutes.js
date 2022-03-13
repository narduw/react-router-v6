import useAuth from './useAuth'
import { Navigate, Outlet } from 'react-router-dom'

export default function AuthorizedRoutes({ roles: requiredRoles }) {
	const { user } = useAuth()
	const isAuthorized = user?.roles?.some(role => requiredRoles.includes(role))
	return <>
		{isAuthorized ? <Outlet/> : <Navigate to='/' />}
	</>
}