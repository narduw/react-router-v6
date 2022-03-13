import useAuth from './useAuth'
import AuthenticatedRoutes from './AuthenticatedRoutes'
import PublicRoutes from './PublicRoutes'

function App() {
  const { user } = useAuth()
  const AppRoutes = user ? AuthenticatedRoutes : PublicRoutes
  return <div className='flex flex-col text-center'>
    <AppRoutes />
  </div>
}

export default App;