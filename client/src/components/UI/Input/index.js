import React from 'react'
import styles from './styles.module.scss'

function Input ({ name, value = '', type, onChange = () => {}, placeholder, loading, className, inputClassname, search, ...rest }) {
  return (
    <div className={[styles.InputDiv, className].join(' ')}>
      <input
        name={name}
        value={value}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        className={styles.InputDiv__Input}
      />
      {search && <label className={styles.InputDiv__search}> <i className='fa fa-search' /> </label> }
      { loading && <label className={styles.InputDiv__loading}> <i className='fa fa-cog' /> </label> }
    </div>
  )
}

export default Input
