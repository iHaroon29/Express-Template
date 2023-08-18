import { Router } from 'express'
import tryCatch from '../utils/trycatch.util.js'
import { exampleController } from '../controllers/example.controller.js'

const router = Router()
router.get('/example/:exampleParam', tryCatch(exampleController.getExample))

export default router
