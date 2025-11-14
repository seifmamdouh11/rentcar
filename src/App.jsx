import './App.css'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MasterLayout from './components/MasterLayout/MasterLayout'
import AllCars from './components/AllCars/AllCars'
function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  let routes = createBrowserRouter([
    {
      path: '/',
      element: <MasterLayout />,
    },
    { path: 'cars', element: <AllCars /> }
  ])
  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
