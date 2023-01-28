import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Main/Navbar'
import Sidebar from '@/components/Main/Sidebar'
import Investor from '@/components/Main/Investor'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     <Investor />
    </>
  )
}
