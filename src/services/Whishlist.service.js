import axios from 'axios';
const API_URL = 'http://localhost:3001/api';

const instance = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

const addProductToWhishlist = () => {
    return instance
      .post('/product/whishlist_prod')
      .then((res) => res.data)
      .catch((err) => err);
  };

const getUserWhishlist = () => {
    return instance
      .post('/user/mywhishlist')
      .then((res) => res.data)
      .catch((err) => err);
  };

const removeProductFromWhishlist = (data) => {
    return instance
      .post('/rmwhislistprod/', data)
      .then((response) => {
        return response.data;
      })
      .catch((err) => err);
  };
  

const whishlistService = {
    addProductToWhishlist,
    getUserWhishlist,
    removeProductFromWhishlist

  };

export default whishlistService;
