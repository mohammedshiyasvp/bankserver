//importing express
const express = require('express')

//import cors
const cors = require('cors')

//importing function
const logic = require('./service/logic')

//server creation
//const a keyword that defines a variable or pointer as unchangeable. 
const bankappserver = express()

//use is inbuilt method if we need to use something we initialize it
bankappserver.use(express.json())

//connect FRONT-END
bankappserver.use(cors({ origin: 'http://localhost:4200' }))

// set port
bankappserver.listen(3001, () => {
    console.log("server started at port 3000");
})

// //server api resolve
// bankappserver.get('/getexc',(req,res)=>{
//     res.send("....post request....")
// })

// bankappserver.get('/getexc2',(req,res)=>{
//     res.send("....post request2....")
// })

//register -post
bankappserver.post('/register', (req, res) => {
    logic.register(req.body.uname, req.body.acno, req.body.passw).then(result => {
        //convert js to json and send as response
        res.status(result.statuscode).json(result)
    })
})

//login - post
bankappserver.post('/login', (req, res) => {
    logic.login(req.body.acno, req.body.passw).then(result => {
        //convert js to json and send as response

        res.status(result.statuscode).json(result)

    })
})
// get user data - get
// balance - get
// Transfer - post
// transaction history - get
// account delete - delete