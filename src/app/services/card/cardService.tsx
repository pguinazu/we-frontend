import api from '../api';

export const cardService = {
  getCurrentCards: async () => {
    const response = await api.get('/cards/currentCards');
    return response.data;
  },

  getCardAddress: async (cardId: string, blockchainId: number) => {
    const url = `/cards/${cardId}/address`;
    const params = { blockchainId };
    const response = await api.get(url, { params });
    return response.data;
  },

  getPan: async (cardId: string) => {
    const response = await api.get(`/cards/${cardId}/pan`);
    return response.data;
  },

  pauseCard: async (cardId: string) => {
    const response = await api.post(`/cards/${cardId}/deactivate`);
    return response.data;
  },

  resumeCard: async (cardId: string) => {
    const response = await api.post(`/cards/${cardId}/activate`);
    return response.data;
  },

  getCardTransactions: async (cardId: string, size = 5, page = 0) => {
    const params = { size, page, sort: 'date,DESC' };
    const response = await api.get(`/cards/${cardId}/transactions`, { params });
    return response.data;
  },
};
