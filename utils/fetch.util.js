import { CustomError } from '../error/custom.error.js'

export const httpRequest = async (url, options = null) => {
  try {
    const response = await fetch(url, options)
    if (!response.ok) {
      const { message } = await response.json()
      throw CustomError.externalAPIError(
        await response.json(message, response.status)
      )
    }
    return await response.json()
  } catch (e) {
    return e
  }
}
