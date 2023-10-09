import { UserButton } from '@clerk/nextjs'
import React, { ReactNode } from 'react'
import Logo from '../components/Logo'
import ThemeSwitcher from '../components/ThemeSwitcher'

function Layout({children}:{children:ReactNode}) {
  return (
    <div className='flex flex-col min-h-screen min-w-full bg-backgroud max-h-screen'>{children}
    <nav>Nav
        <Logo/>
        <ThemeSwitcher/>
        <UserButton afterSignOutUrl='/sign-in' />
    </nav>
    <main className='flex w-full flex-grow'>
        {children}
    </main>
    </div>
  )
}

export default Layout