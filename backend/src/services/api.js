// frontend/src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Adjust this if your backend URL changes

export const registerUser = async (userData) => {
  const response = await axios.post(`${API_URL}/users/register`, userData);
  return response.data;
};

export const loginUser = async (userData) => {
  const response = await axios.post(`${API_URL}/users/login`, userData);
  return response.data;
};

export const createBlog = async (blogData, token) => {
  const response = await axios.post(`${API_URL}/blogs`, blogData, {
    headers: {
      Authorization: token,
    },
  });
  return response.data;
};

export const getBlogs = async () => {
  const response = await axios.get(`${API_URL}/blogs`);
  return response.data;
};

export const getBlog = async (id) => {
  const response = await axios.get(`${API_URL}/blogs/${id}`);
  return response.data;
};

export const processPayment = async (paymentData) => {
  const response = await axios.post(`${API_URL}/payment/process`, paymentData);
  return response.data;
};
