const express = require("express")
const userRouter = express.Router()
const User = require("../models/userRouter.js")

userRouter.get("/", (req, res, nex) => {
    User.find((err, users) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(users)
    })
})
userRouter.post("/", (req, res, next) => {
    const newUser = new User(req.body)
    newUser.save((err, savedUser) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedUser)
    })
})
userRouter.delete("/userId", (req, res, next) => {
    Todo.findOneAndDelete({ _id: req.params.userId }, (err, deletedUser) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`successfully deleted ${deletedUser.userName} from our database `)
    })
})
userRouter.put("/userId", (req, res, next) => {
    Todo.findOneAndUpdate({ _id: req.params.userId }, req.body, {new: true}, (err, updatedUser ) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(updatedUser)
    })
})
module.exports = userRouter