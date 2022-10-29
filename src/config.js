const dotenv = require('dotenv')
dotenv.config()

exports.URL_HOST = process.env.URL_HOST || "https://styletransfer-server"
exports.API_POST = process.env.API_POST || "image"

exports.TITLE = 'Style-Changer'
exports.DIALOG_TITLE = 'Choose a photo that you would like to process.'
exports.DIALOG_TEXTCONTENT = 'Image-Button to choose picture is on your left-side. This module is going to change styles after your submitting'

