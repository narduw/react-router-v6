import { createContext, useState } from 'react'

export const ROLES = {
	ADMIN: 'admin',
	AUDITOR: 'auditor'
}

const defaultRoles = {
	admin: false,
	auditor: false
}

const dummyUser = {
	name: 'auditor',
	role: defaultRoles
}

export const AuthContext = createContext(null)

export function AuthProvider({ children }) {
	const storedData = localStorage.getItem('user')
	const storedUser = storedData && JSON.parse(storedData)
	const [user, setUser] = useState(storedUser)

	function login(roles) {
		setUser({
			...dummyUser,
			roles
		})
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
		roles: user?.roles || defaultRoles,
		login,
		logout
	}

	return <>
		<AuthContext.Provider value={authContext}>
			{children}
		</AuthContext.Provider>
	</>
}