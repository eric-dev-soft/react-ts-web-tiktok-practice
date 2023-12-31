import { ReactNode } from 'react'
import { Following, Home, Profile } from '../pages'

type RoutesProps = {
  path: string
  component: ReactNode
}[]

const publicRoutes: RoutesProps = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/following',
    component: Following,
  },
  {
    path: '/profile',
    component: Profile,
  },
]

export { publicRoutes }
