import { CustomError } from '../error/custom.error.js'

export const exampleController = {
  getExample(req, res) {
    if (req.params.test !== 'haroon')
      throw CustomError.internalServerError('Useless')
    return res.status(200).send('hello')
  },
}
