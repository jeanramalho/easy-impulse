"use client"

import Image from 'next/image'
import HomePage from '@/pages/HomePage'
import Router from "@/components/Router"
import { BrowserRouter } from 'react-router-dom'


export default function Home() {
  return (
    <main>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </main>
  )
}
