const express = require('express');
const router = express.Router();

router.post('/cards', (req, res) => {
    console.log(req.body);
    res.json({data:req.body});
});

module.exports = router;