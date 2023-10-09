import React, { ReactNode } from 'react'

function Layout({children}:{children:ReactNode}) {
  return (
    <div className='flex flex-col min-h-screen min-w-full bg-backgroud max-h-screen'>{children}</div>
  )
}

export default Layout