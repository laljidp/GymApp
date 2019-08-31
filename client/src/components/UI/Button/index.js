import React from 'react'
import styles from './styles.module.scss'

function Button ({ children, type, ...rest }) {
  return (
    <div className={[
      styles.Button,
      type === 'primary' ? styles.Button__primary : '',
      type === 'danger' ? styles.Button__danger : ''
    ].join(' ')}
    >
      <button
        {...rest}
      >
        {children}
      </button>
    </div>
  )
}

export default Button
