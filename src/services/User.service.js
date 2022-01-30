import axios from 'axios';
const API_URL = 'http://localhost:3001/api/user';

const instance = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

const loggedInUser = () => {
  return instance
    .post('/logged-in')
    .then((res) => res.data)
    .catch((err) => err);
};
const getUserById = (id) => {
  return instance
    .get(`/${id}`)
    .then((res) => res.data)
    .catch((err) => err);
};

const updateUSer = (data) => {
  return instance
    .put('/', data)
    .then((res) => res)
    .catch((err) => err);
};

const userService = {
  loggedInUser,
  getUserById,
  updateUSer,
};
export default userService;
