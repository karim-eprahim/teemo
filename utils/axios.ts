/**
 * axios setup with authentication and runtime config
 */

import axios from "axios";

const axiosServices = axios.create({
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

// Request interceptor
axiosServices.interceptors.request.use(
  (config) => {
    // Try to get runtime config safely
    try {
      const nuxtConfig = useRuntimeConfig();
      const apiBaseUrl = nuxtConfig?.public?.apiBaseUrl;
      console.log('(apiBaseUrl):', `"${apiBaseUrl}"`);
      
      if (apiBaseUrl && !config.baseURL) {
        config.baseURL = apiBaseUrl;
      }
    } catch (e) {
    }

    // Add auth token if available (Client-side only)
    if (process.client) {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
axiosServices.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;
    if (status === 401) {
      // console.error('Unauthorized access - potential token expiration');
    }
    return Promise.reject((error.response && error.response.data) || "Wrong Services");
  }
);

export default axiosServices;
