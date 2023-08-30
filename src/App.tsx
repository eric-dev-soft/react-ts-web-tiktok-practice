import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import { publicRoutes } from './routes'
import { Layout } from './components/Layouts'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {publicRoutes.map((route) => (
        <Route path={route.path} element={route.component} />
      ))}
    </>
  )
)

function App() {
  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  )
}

export default App
