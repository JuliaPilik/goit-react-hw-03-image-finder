import axios from 'axios';
const PIXABAY_KEY = '32364781-afe6a31ab003614a69c7e9194';
const baseURL = 'https://pixabay.com/api/';

export const getImageGallery = async (imgName, pageNum, pageSize) => {
  try {
    return await axios.get(baseURL, {
      params: {
        key: PIXABAY_KEY,
        q: imgName,
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: pageSize,
        page: pageNum,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
