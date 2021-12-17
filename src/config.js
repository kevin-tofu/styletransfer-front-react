const dotenv = require('dotenv')
dotenv.config()

// console.log(process.env)
// exports.HOST_URL = process.env.API_URL || "http://localhost:1112"
// exports.API_POST = process.env.API || "keypoint/image-raw"

// exports.URL_HOST = process.env.URL_HOST || "http://localhost:5555"
exports.URL_HOST = process.env.URL_HOST || "https://apistransfer.kevin-asobi.com"

exports.API_POST = process.env.API_POST || "image"

exports.TITLE = 'Style-Changer'
exports.DIALOG_TITLE = 'Choose a photo that you would like to process.'
exports.DIALOG_TEXTCONTENT = 'Image-Button to choose picture is on your left-side. This module is going to change styles after your submitting'

