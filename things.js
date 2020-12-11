const express = require('express');
const router = express.Router();

router.get('/now',(req,res)=>{
    res.send("Now Page")
})
router.get('/bow',(req,res)=>{
    res.send("Bow Page")
})

module.exports = router;