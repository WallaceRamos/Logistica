import axios from 'axios';

const api = axios.create({
  //substituir  endereço de Ip pelo gerado abaixo do QR code com o final:3333
  baseURL: 'http://192.168.1.13:3333'
});

export default api;