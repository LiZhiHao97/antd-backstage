import express from 'express'
import userRouter from './user'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'

const app = express()
app.use(cookieParser())
app.use(bodyParser.json())
app.use('/user', userRouter)
app.listen(9000, () => {
  console.log('Node app start at port 9000')
})