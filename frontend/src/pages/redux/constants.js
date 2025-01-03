export const BASE_URL = process.env.NODE_ENV === 'production'
  ? 'https://shop-sphere-liard.vercel.app' 
  : 'http://localhost:5000';

export const USERS_URL = `${BASE_URL}/api/users`;
export const CATEGORY_URL = `${BASE_URL}/api/category`;
export const PRODUCT_URL = `${BASE_URL}/api/products`;
export const UPLOAD_URL = `${BASE_URL}/api/upload`;
