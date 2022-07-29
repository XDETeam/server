import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>XDE.Team</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to XDE.Team!
        </h1>
      </main>
    </div>
  )
}

export default Home
