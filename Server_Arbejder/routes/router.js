const express = require('express')
const router = express.Router();

// router.post("/cu",(reg,res) => {
//     res.send("create user")
// })

router.get("/:rum",(reg,res) => { // :id betyder den er dynamisk. 
    let id = reg.params.rum
    console.log(id)
    console.log("kommer ind i router, ")
})

// router.put("/:id",(reg,res) => {
//     let id = reg.params.id
//     res.send("Update user: " + id)
// })

// router.delete("/:id",(reg,res) => {
//     let id = reg.params.id
//     res.send("Delete user: " + id)
// })


module.exports = router


