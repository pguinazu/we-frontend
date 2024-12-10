import api from '../api';

export const blockchainService = {
    getTokens: async () => {
      const response = await api.get('/tokens/list', {
        params: { tokenId: '1597', 'disabled.equals': 'false' }
      });
      return response.data;
    },
  
    getBlockchains: async () => {
      const response = await api.get('/blockchains/list', {
        params: { 'disabled.equals': 'false' }
      });
      return response.data;
    },

    getAddressByCryptoId: async (cryptoId: number, blockchainId: number) => {
      const url = `/cards/${cryptoId}/address`;
      const params = {
        blockchainId: blockchainId,
      };
    
      try {
        const response = await api.get(url, { params });
        return response.data;
      } catch (error) {
        console.error("Error fetching address:", error);
        throw error;
      }
    }
    
  };