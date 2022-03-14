import useAuth from './useAuth'
import { useState } from 'react'

export default function Login() {
	const { login } = useAuth()
	const [roles, setRoles] = useState({
		admin: false,
		auditor: false
	})

	const handleRoleChange = e => {
		setRoles(roles => ({
			...roles,
			[e.target.value]: e.target.checked
		}))
	}

	return <>
		<h2>Please login</h2>
		<div>
			<h3>Roles</h3>
			<div>
				<span>
					<label htmlFor='roles'>Admin</label>
					<input name='role-admin' type='checkbox' value='admin'
								 onChange={handleRoleChange}
					/>
				</span>
				<span>
					<label htmlFor='roles'>Auditor</label>
					<input name='role-auditor' type='checkbox' value='auditor'
								 onChange={handleRoleChange}
					/>
				</span>
			</div>
		</div>
		<button
			className="w-20 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
			onClick={() => login(roles)}
		>
			Login
		</button>
	</>
}