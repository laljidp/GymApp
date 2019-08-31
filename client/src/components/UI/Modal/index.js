import React from 'react'
import { Modal } from 'antd'

function MyModal ({ visible, title, footer, children, header, ...rest }) {
  return (
    <Modal
      header={header}
      visible={visible}
      title={title}
      footer={footer}
      {...rest}
    >
      {children}
    </Modal>
  )
}

export default MyModal
