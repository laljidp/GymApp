import React from 'react'
import moment from 'moment'
import styles from '../styles.module.scss'

function Card (props) {
  const {
    createdBy, dob, ending_date, exercise, fees, id,
    joining_date, mobile_no, name, updatedAt, updatedBy
  } = props.data
  return (
    <div className={styles.Cards}>
      <div className={styles.Cards__header} >
        {name}
      </div>
      <div className={styles.Cards__body}>
        <div className={styles.Cards__body__Img}>
          <img src='#' alt='' />
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
    </div>
  )
}

export default Card
