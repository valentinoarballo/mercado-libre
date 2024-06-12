import axios from 'axios';

const FetchData = async (endpoint) => {
  try {
    const response = await axios.get(
      `https://api.mercadolibre.com/sites/MLA/${endpoint}`,
      {
        headers: {
          'Content-Type': 'application/json',
        }
      }
    )

    const data = response.data;

    return data

  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export default FetchData;