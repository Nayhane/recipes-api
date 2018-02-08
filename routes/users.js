const router = require('express').Router()
const { User } = require('../models')


router.post('/users', (req,res,next) =>{
  User.register(new User({name:req.body.name, email: req.body.email}), req.body.password, (err, user) => {
    if (err) {
      err.status = 422
      return next (err)
    }
    let userInfo = ({name: user.name, email: user.email, createdAt: user.createdAt, updatedAt: user.updatedAt })
    res.status(201).send(userInfo)
  })
})

module.exports = router
