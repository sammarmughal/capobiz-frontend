import axios from 'axios';

const fetchImage = async (query) => {
  try {
    const response = await axios.get(
      'https://api.unsplash.com/search/photos',
      {
        params: { query: query, per_page: 1 },
        headers: {
          Authorization: `Client-ID 953-18VUQLifgkDXeLypM5Qm5W6L7Jmhf-SVNIgRHag`,
        },
      }
    );

    const imageUrl = response.data.results[0]?.urls?.regular;
    return imageUrl;
  } catch (error) {
    console.error('Error fetching image:', error);
    return null;
  }
};

export default fetchImage;