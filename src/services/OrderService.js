import http from './BaseService';

const createOrder = (product) => http.post('/order', product)
  .then(response => response.data);

const getOrder = (params) => http.get('/order/' + params)
  .then(response => response.data);

const deleteOrder = (params) => http.post('/order/delete')
  .then(response => response.data);

  export default {
    createOrder,
    getOrder,
    deleteOrder
  }