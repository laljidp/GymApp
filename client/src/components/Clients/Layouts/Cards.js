import React, { useState } from 'react'
import moment from 'moment'
import styles from '../styles.module.scss'

function Card (props) {
  const {
    exercise, id, image,
    joining_date, mobile_no, name
  } = props.data

  const [cardInfoModal, toggleModal] = useState(false)

  const openCardInfo = (id) => {
    toggleModal(!cardInfoModal)
    console.log(id)
  }
  return (
    <div className={styles.Cards} onClick={() => openCardInfo(id)}>
      <div className={styles.Cards__header} >
        {name}
      </div>
      <div className={styles.Cards__body}>
        <div className={styles.Cards__body__Img}>
          <img src={image || 'https://i.pinimg.com/originals/ed/9b/09/ed9b09e2fbd90a159af173bf1719ea70.jpg'} alt='' />
        </div>
        <div className={styles.Cards__exercise}>
          {exercise}
        </div>
        <div className={styles.Cards__JOD}>
            JOD: {moment(joining_date).format('YYYY-MM-DD')}
        </div>
        <div className={styles.Cards__mobileNo}>
            MOB: {mobile_no}
        </div>
      </div>
      <div className={styles.Cards__Bottom}>
        <div className={styles.Cards_Botton__edit}>
          Edit
        </div>
        <div className={styles.Cards__Botton_delete}>
          Delete
        </div>
      </div>
    </div>
  )
}

export default Card
