import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const register = async data => {
  const { data: result } = await instance.post('/users/signup', data);
  instance.defaults.headers.authorization = `Bearer ${result.token}`;
  return result;
};

export const login = async data => {
  const { data: result } = await instance.post('/users/login', data);
  instance.defaults.headers.authorization = `Bearer ${result.token}`;
  return result;
};

export const logout = async () => {
  const { data: result } = await instance.post('/users/logout');
  instance.defaults.headers.authorization = '';
  return result;
};

export const getCurrent = async token => {
  try {
    instance.defaults.headers.authorization = `Bearer ${token}`;
    const { data: result } = await instance.get('/users/current');
    return result;
  } catch (error) {
    instance.defaults.headers.authorization = `Bearer ${null}`;
    throw error;
  }
};
