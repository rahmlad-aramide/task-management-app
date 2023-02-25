import axios from 'axios';

const apiKey = 'a37f0790-9a3b-491c-8bba-7ba777c3f4d9';

export default async function fetchData() {
  try {
    const response = await axios.get('https://api.hashnode.com/articles', {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
}
