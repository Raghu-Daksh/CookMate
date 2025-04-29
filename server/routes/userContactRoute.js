    const express = require('express');
const { userContactDetails } = require('../controller/userContactController');
    
    const router = express.Router();

    router.post('/userContact', userContactDetails);

    module.exports = router;