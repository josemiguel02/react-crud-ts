const __DEV__ = process.env.NODE_ENV !== 'production'

export const API_URL = __DEV__
  ? 'http://localhost:5000/api/cameras'
  : 'https://cameras-api.onrender.com/api/cameras'

export const BASE_URL = __DEV__
  ? 'http://localhost:5000'
  : 'https://cameras-api.onrender.com'
