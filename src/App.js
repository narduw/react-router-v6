import AppRoutes from './routes/AppRoutes'
import Navigation from './components/Navigation'

function App() {
  return <div className='flex flex-col items-center text-center mx-auto'>
    <Navigation />
    <h1 className='text-3xl font-bold'>React Router Auth</h1>
    <AppRoutes/>
  </div>
}

export default App;