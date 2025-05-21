import axios from 'axios';
import { toast } from '@/hooks/use-toast';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// Add response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle error responses
    const message = error.response?.data?.message || 'An error occurred';
    toast({
      title: "Error",
      description: message,
      variant: "destructive",
    });
    return Promise.reject(error);
  }
);

export default axiosInstance;
