"use client"

import Image from 'next/image'
import HomePage from '@/pages/HomePage'
import RequestPage from '@/pages/RequestPage/[apikey]'



export default function Home() {
  return (
    <main>
      <HomePage />
    </main>
  )
}
