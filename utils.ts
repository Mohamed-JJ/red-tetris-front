// import { type ClassValue, clsx } from "clsx"
// import { twMerge } from "tailwind-merge"

// export function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs))
// }

import axios from 'axios';
axios.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;

axios.interceptors.request.use(
  function (config) {
    config.baseURL = process.env.NEXT_PUBLIC_BACKEND_URL
    // Get the access token from local storage
    const token = localStorage.getItem('accessToken');
    console.log("the acceess token is ", token)

    // If the token exists, set the Authorization header
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    // Handle the request error
    return Promise.reject(error);
  }
);

export const setToken=(token:string)=>{
  localStorage.setItem("accessToken", token)
}

export const removeToken=()=>{
  localStorage.removeItem("accessToken")
}

export const checkToken=()=>{
  if (localStorage.getItem("accessToken"))
    return true
  return false
}

