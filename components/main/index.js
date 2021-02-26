import React, { Component } from 'react'
import styles from '../styles.module.css'

export class Main extends Component {
  render() {
    return (
<div>
  <div className="jumbotron">
    <h1 className={styles.colorh}>Akinon Next App Tutorial</h1>
    <img className={styles.nextlogo} src="./assets/logoNext.png"/>
    <p>NextJs'hızlıca başlangıç</p>
  </div>
  <main>
        <div className={styles.grid}>
        <a href="/demo" className={styles.card}>
            <h3>Props demo sayfası  &rarr;</h3>
          </a>
          <a  className={styles.card}>
            <h3>Atomik Next yapısı &rarr;</h3>
          </a>
          <a href="" className={styles.card}>
            <h3>Css kullanımı &rarr;</h3>
          </a>
          <a
            className={styles.card}
          >
            <h3>Assets kullanma &rarr;</h3>
          </a>
          <a
            className={styles.card}
          >
            <h3>Paket yükleme &rarr;</h3>
            <p>
              Bootstrap,Sass,,,,,
            </p>
          </a>

          <a
            className={styles.card}
          >
            <h3>Çook Yakında &rarr;</h3>
            <p>
              Mdx,Props
            </p>
          </a>
          <a
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Vercel
            </p>
          </a>
        </div>
      </main>
</div>

    )
  }
}

export default Main
