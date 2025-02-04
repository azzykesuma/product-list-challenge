import { PropsWithChildren } from 'react'

const Layout = ({children} : PropsWithChildren) => {
  return (
    <main className='h-screen w-full p-4 px-6 bg-rose-50 overflow-hidden md:p-14 lg:p-20'>
        {children}
    </main>
  )
}

export default Layout
