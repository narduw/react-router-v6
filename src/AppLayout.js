export default function AppLayout({ children }) {
	return <div
		className='mx-auto'
	>
		<h1 className='text-3xl font-bold'>React Router Auth</h1>
		{children}
	</div>
}