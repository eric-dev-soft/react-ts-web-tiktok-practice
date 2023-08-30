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
      {publicRoutes.map(({ path, component: Component }) => (
        <Route path={path} element={<Component />} key={path} />
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
