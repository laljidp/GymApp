import React from 'react'
import { Tag } from 'antd'
import styles from '../styles.module.scss'

function TrainerList ({ trainers = [] }) {
  return (
    <div className={styles.TrainerList}>
      {
        trainers.map(t => (
          <div className={styles.TrainerList__Card}>
            <span className={styles.TrainerList__Card__name}>{t.name}</span>
            <hr />
            Specialist:
            <div className={styles.TrainerList__Card__Tags}>
              { t.specialist.map(s => (
                <Tag color='#108ee9'>{s}</Tag>
              )) }
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default TrainerList
