import axios from 'axios';

const API_URL = 'https://server.figmamakets.com/api/';
axios.defaults.baseURL = API_URL;

export const CardService = {
  async getAll() {
    const { data } = await axios.get('/makets');
    return data;
  },

  async getById(id) {
    const { data } = await axios.get(`makets/maket?id=${id}`);
    return data;
  },

  async getOptions() {
    const { data } = await axios.get('/options');
    return data;
  },

  async getCardByOption(req) {
    const { data } = await axios.get(`/makets/option${req}`);
    return data;
  },

  async getPopular() {
    const { data } = await axios.get('/makets/popular');
    return data;
  },

  async getRandom(type, color, level) {
    const { data } = await axios.get(
      `/makets/random-for-option?type=${type}&color=${color}&level=${level}`,
    );
    return data;
  },

  async getCount() {
    const { data } = await axios.get('/makets/count');
    return data;
  },

  async getWithPagination(page, limit) {
    const { data } = await axios.get(`/makets/paginations?page=${page}&limit=${limit}`);
    return data;
  },

  async incrementLike(id) {
    try {
      const { data } = await axios.post(`/likes`, { id: id });
      return data;
    } catch (error) {
      console.error('Error while incrementing likes:', error);
      throw error;
    }
  },
};
