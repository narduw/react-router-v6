import { createContext, useState } from 'react'

export const ROLES = {
	ADMIN: 'admin',
	USER: 'user'
}

const dummyUser = {
	name: 'user',
	roles: ['admin']
}

export const AuthContext = createContext(null)

export function AuthProvider({ children }) {
	const storedData = localStorage.getItem('user')
	const storedUser = storedData && JSON.parse(storedData)
	const [user, setUser] = useState(storedUser)

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