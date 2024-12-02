import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api-dev.we.asf.dev/api';

export const cardService = {
  getCurrentCards: async () => {
    const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0MDAyQHRlc3QwMDIuY29tIiwiZXhwIjoxNzMzNDExNjg1LCJhdXRoIjoiUk9MRV9VU0VSIiwiaWF0IjoxNzMwODE5Njg1fQ.lvQOixDxBnIhKhltxBXV-fpLhnhjauCfsuIiZk_i5kekz7dECardv48Fyx-eLo-b6Bhn2eWe5aiAjUd8SWn4uQ';
    const response = await axios.get(`${API_URL}/cards/currentCards`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  },

  getCardAddress: async (cardId: string, blockchainId: number) => {
    const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0MDAyQHRlc3QwMDIuY29tIiwiZXhwIjoxNzMzNDExNjg1LCJhdXRoIjoiUk9MRV9VU0VSIiwiaWF0IjoxNzMwODE5Njg1fQ.lvQOixDxBnIhKhltxBXV-fpLhnhjauCfsuIiZk_i5kekz7dECardv48Fyx-eLo-b6Bhn2eWe5aiAjUd8SWn4uQ';
    const response = await axios.get(`${API_URL}/cards/${cardId}/address?blockchainId=${blockchainId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  },

  getPan: async (cardId: string) => {
    const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0MDAxQHRlc3QwMDEuY29tIiwiZXhwIjoxNzMyMTI3ODkzLCJhdXRoIjoiUk9MRV9VU0VSIiwiaWF0IjoxNzMyMDQxNDkzfQ.TsfStV01mgwkddvsRj65jXVG-6W49y1ZP8EhylgpewhYmjy6Z6CGQKud_mMxTHr0bd7JSD8Hyar0m3lNyC2G1w';
    const response = await axios.get(`${API_URL}/cards/${cardId}/pan`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  },

  pauseCard: async (cardId: string) => {
    const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0MDAxQHRlc3QwMDEuY29tIiwiZXhwIjoxNzMyMjk4MzAxLCJhdXRoIjoiUk9MRV9VU0VSIiwiaWF0IjoxNzMyMjExOTAxfQ.l_RwluhRq1orPUb7GBr6CdybcYmbSvH8rRF2q1MdavU7BKqqJXR2WcNnSEVWkfSRSIXagugJ5BtCnmTQ0GATLQ';
    const response = await axios.post(`${API_URL}/cards/${cardId}/deactivate`, {}, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  },

  resumeCard: async (cardId: string) => {
    const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0MDAxQHRlc3QwMDEuY29tIiwiZXhwIjoxNzMyMjk4MzAxLCJhdXRoIjoiUk9MRV9VU0VSIiwiaWF0IjoxNzMyMjExOTAxfQ.l_RwluhRq1orPUb7GBr6CdybcYmbSvH8rRF2q1MdavU7BKqqJXR2WcNnSEVWkfSRSIXagugJ5BtCnmTQ0GATLQ';
    const response = await axios.post(`${API_URL}/cards/${cardId}/activate`, {}, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  },

  getCardTransactions: async (cardId: string, size = 5, page = 0) => {
    const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0MDAyQHRlc3QwMDIuY29tIiwiZXhwIjoxNzM1NDE0NjgyLCJhdXRoIjoiUk9MRV9VU0VSIiwiaWF0IjoxNzMyODIyNjgyfQ.RB-TS6UuHSrNc4QdoyLvFysIJHUzSd2ABfB8pN8fAVRcSqDtjulTxfFgCT4F5jrowHwYHkC6QHtaZjtas17RIA';
    const response = await axios.get(`${API_URL}/cards/${cardId}/transactions`, {
      params: { size, page, sort: 'date,DESC' },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  },
};
