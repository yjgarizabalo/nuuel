const express = require('express')
const router = express.Router()

const {renderIndex, } =  require('../controller/index.controller')

router.get('', renderIndex)

module.exports = router