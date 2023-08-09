// JSON payload config

export const maxSize = process.env.nodeEnv === 'PRODUCTION' ? '10mb' : '50mb'

// Cors Options

const whitelist = ['http://127.0.0.1:3000', 'http://localhost:3000']
export const corsOptions = {
  credentials: true,
  origin: (origin, callback) => {
    if (!origin) {
      return callback(null, true)
    }
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  allowedHeaders: ['Content-Type', 'Authorization'],
  exposedHeaders: ['*', 'Authorization'],
}
