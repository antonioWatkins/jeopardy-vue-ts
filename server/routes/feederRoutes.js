const express = require('express')
const router = express.Router()

const {protect} = require('../middleware/authmiddleware')





// alternitivly  below is the short hand of the same thing above but i kept the above version because 
//it is easier to read

// router.route('/').get(getfeeder).post(postFeeder)
// router.route('/').delete(forgiveFeeder).put(putFeeder)

module.exports = router