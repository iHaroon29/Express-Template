export const isAuthenticated = (req, res, next) => {
  try {
    // Custom authentication middleware - examples :- JWT tokens, sessions etc
    // if certain condition is not met, throw custom error and the error middleware will handle the rest
    console.log('Authentication Middle-ware is called!')
    next()
  } catch (e) {
    console.log('Error in Authentication Middle-ware')
    return next(e)
  }
}
