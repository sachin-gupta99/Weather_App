const UNSPLASH_ACCESS_KEY = 'sQqjtnQeEie7RuCcWwvN6RZzv2WzRb3m6Aeb8yrhaqs';

export const fetchBackgroundImage = async (query) => {
  try {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?client_id=${UNSPLASH_ACCESS_KEY}&query=${query}&orientation=landscape`
    );
    const data = await response.json();
    if (data.urls && data.urls.regular) {
      return `url('${data.urls.regular}')`;
    }
  } catch (error) {
    console.error('Error fetching background image:', error);
  }
  return null;
}; 