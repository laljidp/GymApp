import React, { useState } from 'react'
import { graphql } from 'react-apollo'
import { Button } from 'antd'
import Input from '../../components/UI/Input'
import ClientModal from './Layouts/ClientModal'
import ClientCards from './Layouts/ClientCards'
import { fetchClients } from '../../client-graphql/Queries/client.query'
import styles from './styles.module.scss'

function Clients ({ data, ...rest }) {
  const [visible, setVisible] = useState(false)
  const [form, setForm] = useState({})

  const ToggleModal = () => {
    setVisible(!visible)
  }

  const onChange = (e) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value
    })
  }

  const handleSave = () => {
    console.log('save', form)
  }

  const { clients, error, loading } = data
  if (error) {
    return (
      <div>
        <h3> {error} </h3>
      </div>
    )
  }

  if (loading) {
    return (
      <div>Loading</div>
    )
  }

  return (
    <div className={styles.Container}>
      <div className={styles.Client}>
        <div className={styles.Client__searchBox}>
          <Input
            name='search'
            type='text'
            className={styles.Client__searchBox__Input}
            placeholder='Search'
            search
            loading={loading}
          />
          <Button
            type='primary'
            onClick={ToggleModal}
          > Add Client </Button>
        </div>
        <ClientCards clients={clients} />
      </div>
      <ClientModal
        visible={visible}
        onCancel={ToggleModal}
        title='Add new Client'
        form={form}
        onChange={onChange}
        footer={(
          <div className={styles.btnSave}>
            <Button type='primary' onClick={handleSave}>
              Save
            </Button>
          </div>
        )}
      />
    </div>
  )
}

export default graphql(fetchClients,
  { options: (props) => ({ variables: { limit: props.limit || 10, skip: props.skip || 0 } }) }
)(Clients)
