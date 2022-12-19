const express = require('express')
const router = express.Router()

const idgateway = require('./idgateway')
const discovery = require('./discovery')
const identity = require('./identity')

router.get('/name', discovery.getOperatorName) // get operator name and mcc & mnc
router.post('/info', discovery.getOperatorInfo) // get info from operator include id gateway links
router.post('/code', idgateway.getCode) // get code from authenticate for token
router.post('/token', idgateway.getToken) // get token from authenticate
router.post('/getcodenid', identity.getCodeNId) // get code from identity for natinal Id service 
router.post('/gettokennid', identity.getTokenNId) // get token from identity for nationl Id service
router.get('/getinfonid', identity.getInfoNId) // get info from user by national Id service
router.post('/getcodephone', identity.getCodePhone) // get code from identity for natinal Id service 
router.post('/gettokenphone', identity.getTokenPhone) // get token from identity for nationl Id service
router.get('/getinfophone', identity.getInfoPhone) // get info from user by national Id service

module.exports = router;