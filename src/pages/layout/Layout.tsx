import React from 'react'

// import { Figtree } from 'next/font/google'

// import getSongsByUserId from '@/actions/getSongsByUserId'

// import getActiveProductsWithPrices from '@/actions/getActiveProductsWithPrices'
import Sidebar from '@/components/Sidebar'
import ToasterProvider from '@/providers/ToasterProvider'
import UserProvider from '@/providers/UserProvider'
// import ModalProvider from '@/providers/ModalProvider'
// import SupabaseProvider from '@/providers/SupabaseProvider'
import Player from '@/components/Player'

import './globals.css'

// const font = Figtree({ subsets: ['latin'] })

export const metadata = {
  title: 'Spotify Clone',
  description: 'Spotify Clone',
}

export const revalidate = 0;

export default function Layout() {
  // const products = await getActiveProductsWithPrices();
  const userSongs : []= [] //await getSongsByUserId();

  return (
    <>
        <ToasterProvider />
          <UserProvider>
            {/* <ModalProvider products={products} /> */}
            <Sidebar songs={userSongs}>
            </Sidebar>
            <Player />
          </UserProvider>
    </>
  )
}

function Figtree(arg0: { subsets: string[] }) {
  throw new Error('Function not implemented.')
}

