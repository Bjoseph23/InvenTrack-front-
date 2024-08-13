// src/api/api.jsx
import axios from 'axios';

const API_URL = 'http://127.0.0.1:5555'; 

export const getTopSellingProduct = () => axios.get(`${API_URL}/top_selling_product`);
export const getBestSellerLast7Days = () => axios.get(`${API_URL}/best_seller_last_7_days`);
export const getTotalRevenue = () => axios.get(`${API_URL}/total_revenue`);
export const getTotalSaleReturn = () => axios.get(`${API_URL}/total_sale_return`);
export const getTotalPurchase = () => axios.get(`${API_URL}/total_purchase`);
export const getTotalIncome = () => axios.get(`${API_URL}/total_income`);
export const SalesChart = () => axios.get(`${API_URL}/sales_data`);

// Profile
export const getUserProfile = () => axios.get(`${API_URL}/profile`);

// Products
export const fetchProducts = () => axios.get(`${API_URL}/products`);
export const fetchCategories = () => axios.get(`${API_URL}/categories`);

// Authentication
export const signup = (data) => axios.post(`${API_URL}/signup`, data);
export const login = (data) => axios.post(`${API_URL}/login`, data);
export const logout = () => axios.post(`${API_URL}/logout`);
export const checkSession = () => axios.get(`${API_URL}/checksession`);

// User Management
export const getUsers = () => axios.get(`${API_URL}/users`);
export const getUser = (userId) => axios.get(`${API_URL}/users/${userId}`);
export const updateUser = (userId, data) => axios.patch(`${API_URL}/users/${userId}`, data);

// Products
export const getProducts = () => axios.get(`${API_URL}/products`);
export const getProduct = (productId) => axios.get(`${API_URL}/product/${productId}`);
export const createProduct = (data) => axios.post(`${API_URL}/create_product`, data);
export const updateProduct = (productId, data) => axios.put(`${API_URL}/product/${productId}`, data);
export const deleteProduct = (productId) => axios.delete(`${API_URL}/product/${productId}`);

// Categories
export const getCategories = () => axios.get(`${API_URL}/categories`);
export const getProductsByCategory = (categoryId) => axios.get(`${API_URL}/categories/${categoryId}/products`);

export const SalesChart = ()=> axios.get(`${API_URL}/sales_data`)
export const profile = ()=> axios.get(`${API_URL}/user/profile`)
