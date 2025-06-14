import axios from 'axios';
console.log('Interceptor registered!'); 
// Create axios instance with defaults
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
});

// Request interceptor
api.interceptors.request.use(
  function (config) {
    // Only run on client side
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('accessToken');
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Response interceptor for handling common errors
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      if (typeof window !== 'undefined') {
        localStorage.removeItem('accessToken');
        window.location.href = '/auth';
      }
    }
    return Promise.reject(error);
  }
);

export { api };

// Token management functions
export const setToken = (token: string) => {
  localStorage.setItem("accessToken", token);
}

export const removeToken = () => {
  localStorage.removeItem("accessToken");
}

export const checkToken = () => {
  return typeof window !== 'undefined' && !!localStorage.getItem("accessToken");
}

