import fs from 'fs'
import { google } from 'googleapis'
import credentials from './credentials.json'

const scopes = [
  'https://www.googleapis.com/auth/drive'
]

export const folderID = '1Fj4Unk2yPvmqrVphdXJsz4AnrL2IcgHK'

const auth = new google.auth.JWT(
  credentials.client_email, null,
  credentials.private_key, scopes
)

const drive = google.drive({ version: 'v3', auth })

export const listFiles = () => {
  drive.files.list({}, (err, res) => {
    if (err) throw err
    const files = res.data.files
    if (files.length) {
      files.map((file) => {
        console.log(file)
      })
    } else {
      console.log('No files found')
    }
  })
}

export const uploadFile = ({ fileName, folderID, fileStramData }) => {
  var fileMetadata = {
    name: fileName,
    parents: [folderID]
  }

  var media = {
    mimeType: 'image/jpeg',
    body: fileStramData
  }

  return new Promise((resolve, reject) => {
    drive.files.create({
      resource: fileMetadata,
      media: media,
      fields: 'id'
    }, function (err, file) {
      if (err) {
        // Handle error
        reject(err)
        console.error(err)
      } else {
        console.log('File Id: ', file.id)
        resolve(file.id)
      }
    })
  })
}
