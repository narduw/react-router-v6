import useAuth from './useAuth'

export default function Home() {
	const { logout } = useAuth()

	return <>
		<h1>Home</h1>
		<button
			className="w-20 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
			onClick={logout}>
			Logout
		</button>
	</>
}