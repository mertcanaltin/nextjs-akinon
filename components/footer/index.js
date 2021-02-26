import React, { Component } from 'react'
import styles from '../styles.module.css'

export class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
        <a
          target="_blank"
          rel="noopener noreferrer">
          Powered by{' '}
          <img src="/logo.png" alt="akinon Logo" className={styles.logo} />
        </a>
      </footer>
      </div>
    )
  }
}

export default Footer
