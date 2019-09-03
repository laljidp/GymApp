import React, { useState } from 'react'
import moment from 'moment'
import { graphql } from 'react-apollo'
import { useMutation } from '@apollo/react-hooks'
import { Button, Input, Icon } from 'antd'
import ClientModal from './Layouts/ClientModal'
import ClientCards from './Layouts/ClientCards'
import { fetchClients, createClient } from '../../client-graphql/Queries/client.query'
import styles from './styles.module.scss'

function Clients ({ data, ...rest }) {
  const [visible, setVisible] = useState(false)
  const [form, setForm] = useState({ fee: 500 })
  const [addClient, { loading: mutationLoading, error: mutationError }] = useMutation(createClient, {
    update (cache, { data: { createClient: client } }) {
      const data = cache.readQuery({
        query: fetchClients,
        variables: {
          limit: 100, skip: 0
        }
      })
      cache.writeQuery({
        query: fetchClients,
        data: { clients: data.clients.push(client) }
      })
      setVisible(false)
    }
  })

  console.log('mutationError', mutationError)
  console.log('mutationLoading', mutationLoading)

  const ToggleModal = () => {
    setVisible(!visible)
  }

  const onChange = (e) => {
    const { name, value } = e.target

    if (name === 'isSpecialTraining' && value === true) {
      setForm({
        ...form,
        fee: form.fee + 200,
        [name]: value
      })
    } else if (name === 'isSpecialTraining' && value === false) {
      setForm({
        ...form,
        fee: 500,
        [name]: value
      })
    } else {
      setForm({
        ...form,
        [name]: value
      })
    }
  }

  const handleSave = () => {
    console.log('save', form)
    const { name, exercise, isSpecialTraining, joiningDate, mobile_no: mobileNo, dob, image } = form
    const fee = 500 + isSpecialTraining ? 200 : 0
    addClient({
      variables: {
        client: {
          name: name,
          dob: moment(dob).format('YYYY-MM-DD'),
          fee: fee,
          mobile_no: mobileNo,
          joining_date: moment(joiningDate).format('YYYY-MM-DD'),
          exercise: exercise,
          isSpecialTraining
        }
      }
    }).then((result) => {
      console.log('result', result)
    })
      .catch(err => {
        console.log('error', err)
      })
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
            prefix={<Icon type='search' />}
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
            <Button type='primary' loading={mutationLoading} onClick={handleSave}>
              Save
            </Button>
          </div>
        )}
      />
    </div>
  )
}

export default graphql(fetchClients,
  { options: (props) => ({ variables: { limit: props.limit || 100, skip: props.skip || 0 } }) }
)(Clients)
