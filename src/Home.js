import useAuth from './useAuth'
import AppLayout from './AppLayout'

export default function Home() {
	const { logout } = useAuth()

	return <>
		<AppLayout>
			<h1>Home</h1>
			<button
				className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
				onClick={logout}>
				Logout
			</button>
		</AppLayout>
	</>
}