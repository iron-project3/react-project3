import http from './BaseService';

const createOrder = (product) => http.post('/order', product)
  .then(response => response.data);

  export default {
    createOrder
  }