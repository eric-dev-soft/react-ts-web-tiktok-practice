import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'
import { publicRoutes } from './routes'
import { Layout } from './components/Layouts'

const router = createBrowserRouter(createRoutesFromElements(<></>))

function App() {
  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  )
}

export default App
