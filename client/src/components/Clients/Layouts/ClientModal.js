import React, { useState } from 'react'
import MyModal from '../../UI/Modal'
import { Select, Input, DatePicker, Upload, Icon, message, Checkbox } from 'antd'
import styles from '../styles.module.scss'

const { Option } = Select

function ClientModal ({ onChange, form, ...rest }) {
  const { name, joiningDate, exercise, isSpecialTraining = false, dob, mobile_no: mobileNo } = form
  const { fee = 500 } = form
  const [loading, setLoading] = useState(false)
  const [imageUrl, setImageUrl] = useState(null)

  const uploadButton = (
    <div>
      <Icon type={loading ? 'loading' : 'plus'} />
      <div className='ant-upload-text'>Upload</div>
    </div>
  )

  const handleChange = info => {
    if (info.file.status === 'uploading') {
      setLoading(true)
      return
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imageUrl) => {
        console.log('imageUrl', imageUrl)
        setImageUrl(imageUrl)
        onChange({ target: { name: 'image', value: imageUrl } })
        setLoading(false)
      })
    }
  }

  console.log('form', form)
  return (
    <MyModal
      {...rest}
    >
      <div className={styles.ClientModalForm}>
        <div className={styles.ClientModalForm__row}>
          <label> Name </label>
          <Input
            placeholder='name'
            name='name'
            type='text'
            value={name}
            onChange={onChange}
          />
        </div>
        <div className={styles.ClientModalForm__row}>
          <label>Exercise Type</label>
          <Select
            className={styles.ClientModalForm__row__type}
            name='exercise'
            value={exercise}
            onChange={value => onChange({ target: { name: 'exercise', value } })}
            placeholder='Choose Exercise type'
          >
            <Option value='Cadio'>Cardio</Option>
            <Option value='Body Building'>Body Building</Option>
            <Option value='Weight Lifting'>Weight Lifting</Option>
            <Option value='Weight Gain'>Weight Gain</Option>
          </Select>
        </div>
        <div className={styles.ClientModalForm__row}>
          <Input
            placeholder='mobile no'
            name='mobile_no'
            type='text'
            value={mobileNo}
            onChange={onChange}
          />
        </div>
        <div className={styles.ClientModalForm__row}>
          <label>Joining date </label>
          <DatePicker value={joiningDate} onChange={(date => onChange({ target: { name: 'joiningDate', value: date } }))} />
        </div>
        <div className={styles.ClientModalForm__row}>
          <label>Date of Birth </label>
          <DatePicker value={dob} onChange={(date => onChange({ target: { name: 'dob', value: date } }))} />
        </div>

        <div className={styles.ClientModalForm__row}>
          <label> Photo </label>
          <Upload
            name='avatar'
            listType='picture-card'
            className='avatar-uploader'
            showUploadList={false}
            action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
            beforeUpload={beforeUpload}
            onChange={handleChange}
          >
            {imageUrl ? <img src={imageUrl} alt='avatar' style={{ width: '100%' }} /> : uploadButton}
          </Upload>
        </div>
        <div className={styles.ClientModalForm__row}>
          <Checkbox
            className={styles.ClientModalForm__row__Checkbox}
            onChange={e => onChange({ target: { name: 'isSpecialTraining', value: e.target.checked } })}
            value={isSpecialTraining}
          />
          <label>Special Training?</label>
        </div>
        <div className={styles.ClientModalForm__row}>
          <label> Monthly fee </label>
          <Input
            placeholder='fee'
            name='fee'
            type='text'
            disabled
            value={fee}
            onChange={onChange}
          />
        </div>
      </div>
    </MyModal>
  )
}

function getBase64 (img, callback) {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result))
  reader.readAsDataURL(img)
}

function beforeUpload (file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!')
  }
  const isLt2M = file.size / 1024 / 1024 < 1
  if (!isLt2M) {
    message.error('Image must smaller than 1MB!')
  }
  return isJpgOrPng && isLt2M
}

export default ClientModal
