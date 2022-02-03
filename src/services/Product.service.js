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
    .get('/subcategory/category/' + id)
    .then((res) => res.data)
    .catch((err) => err);
};
const addProduct = (data) => {
  return instance
    .post(`/product`, data)
    .then((res) => res.data)
    .catch((err) => err);
};

const updateProduct = (data, id) => {
  return instance
    .put('/product/' + id, data)
    .then((res) => res)
    .catch((err) => err);
};
const getProductById = (id) => {
  return instance
    .get('/product/'+id)
    .then((res) => res)
    .catch((err) => err);
};
const getProductsByUser = (id) => {
  return instance
    .get('/product/user/'+id)
    .then((res) => res)
    .catch((err) => err);
};
const deleteProduct = (id) => {
  return instance
    .delete('/product/'+id)
    .then((res) => res)
    .catch((err) => err);
};

const productService = {
  getCategories,
  getSubcategories,
  getSubcategoriesByCategory,
  addProduct,
  updateProduct,
  getProductById,
  getProductsByUser,
  deleteProduct
};
export default productService;
