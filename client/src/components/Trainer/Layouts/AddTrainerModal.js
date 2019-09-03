import React from 'react'
import { Modal, Input, Button, Select } from 'antd'
import styles from '../styles.module.scss'

const { Option } = Select

function AddTrainerModal ({ visible, header, footer, onChange, formData, onCancel }) {
  const { name, specialist } = formData
  console.log('formData', formData)

  return (
    <div className={styles.TrainerModal}>
      <Modal
        visible={visible}
        footer={footer}
        onCancel={onCancel}
        title={header}
      >
        <div className={styles.TrainerModal__form}>
          <div className={styles.TrainerModal__form__row}>
            <Input
              type='text'
              placeholder='Trainer name'
              name='name'
              onChange={onChange}
              value={name}
            />
          </div>
          <div className={styles.TrainerModal__form__row}>
            <Select
              mode='multiple'
              className={styles.TrainerModal__form__specialist}
              value={specialist}
              name='specialist'
              onChange={(value) => onChange({ target: { name: 'specialist', value } })}
              placeholder='select atleast one'
            >
              <Option value=''> None </Option>
              <Option value='cardio'> Cardio </Option>
              <Option value='Body Building'> Body Building </Option>
              <Option value='Weight Lifting'> Weight lifting </Option>
            </Select>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default AddTrainerModal
