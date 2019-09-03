import React, { useState } from 'react'
import { Input, Icon, Button } from 'antd'
import { graphql } from 'react-apollo'
import styles from './styles.module.scss'
import TrainerList from './Layouts/TrainerList'
import AddTrainerModal from './Layouts/AddTrainerModal'
import { createTrainer, fetchTrainers } from '../../client-graphql/Queries/trainer.query'

function Trainer ({ loading, data, err }) {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({})

  const toggleModal = () => {
    setOpen(!open)
  }

  const { trainers } = data

  const onChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSave = () => {
    console.log('formData', formData)
  }

  console.log('data', data)

  if (loading) {
    return <p>Loading</p>
  }

  if (err) {
    return <p>{err}</p>
  }

  return (
    <div className={styles.Trainer}>
      <div className={styles.Trainer__container} />
      <div className={styles.Trainer__container__form}>
        <Input
          type='text'
          className={styles.Trainer__container__form__search}
          placeholder='search'
          prefix={<Icon type='search' />}
          name='search'
          loading={loading}
        />
        <Button type='primary' onClick={toggleModal}> Add Trainer </Button>
      </div>
      <div>
        <TrainerList trainers={trainers} />
      </div>
      <AddTrainerModal
        visible={open}
        onChange={onChange}
        formData={formData}
        header={'Add New Trainer'}
        footer={
          <Button
            type='primary'
            onClick={handleSave}
          >
            Save
          </Button>
        }
        onCancel={toggleModal}
      />

    </div>
  )
}

export default graphql(fetchTrainers, {
  options: (props) => ({ variables: { limit: props.limit || 10, skip: props.skip || 0 } })
})(Trainer)
