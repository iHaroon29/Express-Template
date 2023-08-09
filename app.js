import express from 'express'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import compression from 'compression'
import morgan from 'morgan'
import zlib from 'zlib'
import { maxSize, corsOptions } from './config/app.config.js'
const app = express()

app.use(cors(corsOptions))
app.use(helmet())
app.use(cookieParser())
app.use(express.json({ limit: maxSize }))
app.use(express.urlencoded({ extended: true }))
app.use(compression({ level: zlib.constants.Z_BEST_COMPRESSION }))
app.use(morgan('tiny'))

app.use((err, req, res, next) => {
  if (err.status === 400 && err.type === 'entity.parse.failed') {
    return res.status(400).send({ message: 'Invalid JSON format!' })
  } else {
    next(err)
  }
  next()
})

app.get('/health', async (req, res, next) => {
  try {
    return res
      .status(200)
      .send({ message: 'Healthy :)', date: new Date().toDateString() })
  } catch (e) {
    next(e)
  }
})

app.use('*', (req, res, next) => {
  return res.status(404).send({
    message:
      'Invalid Route, Please Read Readme.md for info on available routes.',
    errType: 'ROUTE_NOT_FOUND_CLIENT',
  })
})

app.use((err, req, res, next) => {
  if (err)
    return res.status(500).send({
      message: 'Internal Server Error',
      errorMessage: err.message,
      errType: 'SERVER_ERROR',
    })
})

export default app
