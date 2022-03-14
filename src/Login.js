import useAuth from './useAuth'

export default function Login() {
	const { login } = useAuth()

	return <>
		<h2>Please login</h2>
		<button
			className="w-20 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
			onClick={login}
		>
			Login
		</button>
	</>
}