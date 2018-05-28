import express from 'express'
import utils from 'utility'
import model from './model'

const Router = express.Router()
const User = model.getModel('user')
const _filter = { pwd: 0, _v: 0 }

Router.get('/list', (req, res) => {
  User.find({}, (err, doc) => {
    return res.json(doc)
  }) 
})

Router.post('/login', (req, res) => {
  const { user, pwd } = req.body
  User.findOne({user, pwd: md5Pwd(pwd)}, _filter, (err, doc) => {
    if (!doc) {
      return res.json({ code: 1, msg: '用户名或密码错误' })
    }
    res.cookie('userid', doc._id)
    return res.json({ code: 0, data: doc })
  })
})

Router.get('/info', (req, res) => {
  const { userid } = req.cookies
  if (!userid) {
    // 用户没有cookie
    return res.json({code: 1})
  }
  User.findOne({ _id: userid }, (err, doc) => {
    if (err) {
      return res.json({ code: 1, msg: '后端出错了' })
    }
    if (doc) {
      return res.json({ code: 0, data: doc })
    }
  })
})

const adminuser = new User({ user: 'test', pwd: md5Pwd('123') })
adminuser.save()

function md5Pwd(pwd) {
  const salt = 'chintek'
  return utils.md5(utils.md5(pwd + salt))
}

export default Router