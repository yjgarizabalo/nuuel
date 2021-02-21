const express = require('express')
const router = express.Router()

const {renderUndercontruction} =  require('../controller/undercontruction.controller')

router.get('', renderUndercontruction)

module.exports = router