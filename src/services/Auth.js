import axios from 'axios';
const API_URL = 'http://localhost:3001/api/user';

const instance = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

const login = (data) => {
  return instance
    .post('/login', {
      email: data?.email,
      password: data?.password,
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => err);
};
const register = (data) => {
  return instance
    .post('/register', data)
    .then((response) => {
      return response.data;
    })
    .catch((err) => err);
};

const logout = () => {
  return instance
    .get('/logout')
    .then((response) => {
      return response.data;
    })
    .catch((err) => err);
};

const jwt = () => {
  return instance
    .get('/jwt')
    .then((response) => {
      return response.data;
    })
    .catch((err) => window.location.href = "/login");
};

const AuthService = {
  login,
  logout,
  register,
  jwt
};
export default AuthService;
