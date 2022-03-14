import useAuth from './useAuth'
import { Link } from 'react-router-dom'

export default function Navigation() {
	const { user, roles: { admin, auditor }} = useAuth()

	return <>
		<nav>
			{user && <>
				<Link to='/'>Home</Link>
				{admin && <Link to="users">Manage Users</Link>}
				{auditor && <Link to="files">Manage Files</Link>}
			</>}
			{!user && <>
				<Link to='login'>Login</Link>
			</>}
			<Link to='faq'>FAQ</Link>
		</nav>
	</>
}