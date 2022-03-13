import { createContext, useState } from 'react'

const dummyUser = {
	name: 'user'
}

export const AuthContext = createContext(null)

export function AuthProvider({ children }) {
	const [user, setUser] = useState(null)

	function login() {
		setUser(dummyUser)
		localStorage.setItem('user', JSON.stringify(dummyUser))
		return user
	}

	function logout() {
		setUser(null)
		localStorage.removeItem('user')
		return null
	}

	const authContext = {
		user,
		login,
		logout
	}

	return <>
		<AuthContext.Provider value={authContext}>
			{children}
		</AuthContext.Provider>
	</>
}