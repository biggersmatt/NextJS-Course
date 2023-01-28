import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

import Loader from '../components/Loader'
import toast from 'react-hot-toast'

export default function Home() {
  return (
    <div>
      <h1>Next.js w/ Firebase</h1>
      <Link prefetch={false} href='/matt3'>Matt's Profile</Link>
      <Loader show />
      <button onClick={() => toast.success('Hello Toast')}>Toast Me</button>
    </div>
  )
}
