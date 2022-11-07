const express = require('express')
const router = express.Router();

router.get("/",(reg,res) => {
    res.send("UserList")
    
})

router.post("/cu",(reg,res) => {
    res.send("create user")
})

router.get("/:id",(reg,res) => { // :id betyder den er dynamisk. 
    let id = reg.params.id
    res.send("Id: " + id)
})

router.put("/:id",(reg,res) => {
    let id = reg.params.id
    res.send("Update user: " + id)
})

router.delete("/:id",(reg,res) => {
    let id = reg.params.id
    res.send("Delete user: " + id)
})






module.exports = router


