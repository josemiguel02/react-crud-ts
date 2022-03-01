import { CamerasList } from './components/CamerasList'

const App = () => {
  return (
    <main className='flex flex-col items-center bg-primary min-h-screen'>
      <div className='container p-4'>
        <h1 className='text-3xl font-sans font-semibold'>
          Security Camera Store
        </h1>

        <CamerasList />
      </div>
    </main>
  )
}

export default App
