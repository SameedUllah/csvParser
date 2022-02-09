const express = require('express')
const router = express.Router()
const {getFile, deleteFile, updateFile, createFile} = require('../controller/fileController') 

router.route('/').get(getFile).post(createFile)
router.route('/:id').put(updateFile).delete(deleteFile)


module.exports = router;
