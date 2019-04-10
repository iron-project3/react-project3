import http from './BaseService';

const createOrder = (product) => http.post('/order', product)
  .then(response => response.data);

const getOrder = (params) => http.get('/order/' + params)
  .then(response => response.data);

  // const productFind = (params = {}) => http.get('/product/cart/' , { params })
  // .then(response => response.data);

const deleteProduct = (params) => http.post('/order/delete/'+ params)
  .then(response => response.data);

const deleteOrder = () => http.post('/order/delete')
  .then(response => response.data);

  export default {
    createOrder,
    getOrder,
    deleteProduct,
    deleteOrder
  }