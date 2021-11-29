import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.thedogapi.com/v1',
    headers: {'x-api-key': '6e8fd2c9-40c4-46ab-ab78-dcfaccc45eea'}
})

export default api;