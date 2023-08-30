import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

type LayoutProps = {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Sidebar />
      <main>{children}</main>
    </>
  )
}
