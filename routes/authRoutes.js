// 1st method to get Router
// const express = require('express');
// const router = express.Router();

// 2nd method to get Router

const {hello} = require('../controllers/authControllers');


const router = require('express').Router();

router.get('/auth',(req,res)=>{
    res.send('<h1 style="color:blue">Welcome to Auth Page</h1>')
})

router.get('/login',hello)

module.exports = router;