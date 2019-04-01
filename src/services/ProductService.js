import http from './BaseService';

const getProducts = (params = {}) => http.get('/product', { params }).then(response => response.data);
const getProductsByCategory = (params = {}) => http.get('/product/', { params }).then(response => response.data);

export default {
  getProducts,
  getProductsByCategory
}