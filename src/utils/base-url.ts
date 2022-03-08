const __DEV__ = process.env.NODE_ENV !== 'production'

export const BASE_URL = __DEV__
  ? 'http://localhost:5000'
  : 'https://cameras-api.onrender.com'

export const API_URL = `${BASE_URL}/api/cameras`
