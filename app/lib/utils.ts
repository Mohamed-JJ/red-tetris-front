import axios from "axios"

// added the logic to send the auth token in the request before every request, we can add also other logic here before sending the request
axios.interceptors.request.use(config => {
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`;
    }
    return config;
});


// here we can process the response before resolving the promise made from somewhere in the code
axios.interceptors.response.use(
    response => response,
    error => {
      const status = error.response ? error.response.status : null;
      
      if (status === 401) {
        // Handle unauthorized access
      } else if (status === 404) {
        // Handle not found errors
      } else {
        // Handle other errors
      }
      
      return Promise.reject(error);
    }
  );