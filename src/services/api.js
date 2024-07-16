import axios from 'axios';

const API_URL = 'http://20.244.56.144/test/';

export const getProducts = async (company, category, topN, minPrice, maxPrice) => {
  try {
    const response = await axios.get(`${API_URL}companies/${company}/categories/${category}/products`, {
      params: {
        'top-n': topN,
        minPrice,
        maxPrice
      }
    });
    return response.data.map((product, index) => ({ ...product, id: index + 1 })); // Add unique ID
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

export const getProductDetails = async (productId) => {
  // Placeholder: Implement the actual API call here
  return {
    productName: "Sample Product",
    company: "Sample Company",
    category: "Sample Category",
    price: 100,
    rating: 4.5,
    discount: 10,
    availability: "yes"
  };
};
