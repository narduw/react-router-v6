import useAuth from '../hooks/useAuth'

export default function Home() {
	const { logout, roles } = useAuth()

	const activeRoles = Object.entries(roles).reduce((activeRoles, [role, status]) => {
		if (!!status) {
			activeRoles.push(role)
		}
		return activeRoles
	}, [])

	const loggedInAs = activeRoles.length ? `as ${activeRoles.join(', ')}` : null

	return <>
		<h2>Home</h2>
		<div>
				<h3>Logged in {loggedInAs}</h3>
		</div>
		<button
			className="w-20 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
			onClick={logout}>
			Logout
		</button>
	</>
}