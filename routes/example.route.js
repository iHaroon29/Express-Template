import { Router } from 'express'
import tryCatch from '../utils/tryCatch.js'
import { exampleController } from '../controllers/example.controller.js'

const router = Router()
router.get('/example/:test', tryCatch(exampleController.getExample))

export default router
