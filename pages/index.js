import Head from 'next/head'
import styles from '../components/styles.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import {
  Main,Footer
} from '../components'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Akinon Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main/>
      <Footer/>
    </div>
  )
}
