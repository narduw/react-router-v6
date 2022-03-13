import useAuth from './useAuth'
import AppLayout from './AppLayout'

export default function Login() {
	const { login } = useAuth()

	return <>
		<AppLayout>
			<h2>Please login</h2>
			<button
				className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
				onClick={login}
			>
				Login
			</button>
		</AppLayout>
	</>
}