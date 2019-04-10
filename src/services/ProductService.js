import http from './BaseService';

const getProducts = (params = {}) => 
  http.get('/product', { params })
    .then(response => response.data);

const getSuggestions = (params = {}) => 
  http.get('/product/suggestions', { params })
    .then(response => response.data);
    
const saveProduct = (product) => 
  http.post('/product', product)
    .then(response => response.data);
    
const productFind = (params = {}) => http.get('/product/cart/' , { params })
  .then(response => response.data);

export default {
  getProducts,
  getSuggestions,
  saveProduct,
  productFind
}