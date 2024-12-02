import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api-dev.we.asf.dev/api';

export const blockchainService = {
    getTokens: async () => {
      const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsdWNhc21ncmFuZG9AZ21haWwuY29tIiwiZXhwIjoxNzMzNTgwNzE5LCJhdXRoIjoiUk9MRV9VU0VSIiwiaWF0IjoxNzMwOTg4NzE5fQ.pD1CuA-pIK0FufanIDMWKCWNbDjvW4dUotgMhetbenDv1uIMXxtIbOqkuDLsgc5eeHzRSimUkWzHQS1cQEi89w';
      const response = await axios.get(`${API_URL}/tokens/list`, {
        params: { tokenId: '1597', 'disabled.equals': 'false' },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    },
  
    getBlockchains: async () => {
      const token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsdWNhc21ncmFuZG9AZ21haWwuY29tIiwiZXhwIjoxNzMzNTgwNzE5LCJhdXRoIjoiUk9MRV9VU0VSIiwiaWF0IjoxNzMwOTg4NzE5fQ.pD1CuA-pIK0FufanIDMWKCWNbDjvW4dUotgMhetbenDv1uIMXxtIbOqkuDLsgc5eeHzRSimUkWzHQS1cQEi89w';
      const response = await axios.get(`${API_URL}/blockchains/list`, {
        params: { 'disabled.equals': 'false' },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    },
  };