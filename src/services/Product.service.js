import axios from 'axios';
const API_URL = 'http://localhost:3001/api';

const instance = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

const getCategories = () => {
  return instance
    .get('/category')
    .then((res) => res.data)
    .catch((err) => err);
};
const getSubcategories = () => {
  return instance
    .get('/subcategory')
    .then((res) => res.data)
    .catch((err) => err);
};
const getSubcategoriesByCategory = (id) => {
  return instance
    .get('/subcategory/category/'+id)
    .then((res) => res.data)
    .catch((err) => err);
};
const addProduct = (data) => {
  return instance
    .post(`/product`, data)
    .then((res) => res.data)
    .catch((err) => err);
};

const updateUSer = (data) => {
  return instance
    .put('/', data)
    .then((res) => res)
    .catch((err) => err);
};
const updatePassword = (data) => {
  return instance
    .put('/password', data)
    .then((res) => res)
    .catch((err) => err);
};
const updateAvatar = (data) => {
  return instance
    .put('/avatar', data)
    .then((res) => res)
    .catch((err) => err);
};

const productService = {
  getCategories,
  getSubcategories,
  getSubcategoriesByCategory,
  addProduct
};
export default productService;
