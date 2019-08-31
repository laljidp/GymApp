import React from 'react'
import Card from './Cards'
import styles from '../styles.module.scss'

function ClientCards ({ clients = [] }) {
  return (
    <div className={styles.ClientCards}>
      <div className={styles.ClientCards__Header}>
        Clients
      </div>
      <div className={styles.ClientCards__Card_container}>
        {
          clients.map((c) => (
            <Card data={c} />
          ))
        }
      </div>
    </div>
  )
}

export default ClientCards
