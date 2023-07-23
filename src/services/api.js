import axios from 'axios';

const BASEURL = 'https://pixabay.com/api/';
const API_KEY = '36775781-ef40f42b03ba5b079902920a8';

export const getImg = async (searchText, page) => {
  try {
    const response = await axios.get(BASEURL, {
      params: {
        q: searchText,
        // page: 1, 
        key: API_KEY,
        image_type: "photo",
        orientation: "horizontal",
        per_page: 12 * page,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default getImg;