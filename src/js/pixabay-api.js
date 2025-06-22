import axios from 'axios';

const myKey = "50802626-049eec3b85d267f80d4405b2d";
const url = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  const params = {
    key: myKey,
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true
  };

  return axios.get(url, { params })
    .then(response => {
      if (response.data.hits.length === 0) {
        throw new Error('Sorry, there are no images matching your search query. Please try again!');
      }
      return response.data; 
    });
}