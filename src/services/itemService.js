// import axios from 'axios';

// // Base API URL
// const API_URL = 'http://localhost:3000/items'; // Update this URL if the backend server URL is different

// // Fetch all items
// export const getItems = async () => {
//   try {
//     const response = await axios.get(API_URL);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching items:', error);
//     throw error;
//   }
// };

// // Fetch a single item by ID
// export const getItemById = async (id) => {
//   try {
//     const response = await axios.get(`${API_URL}/${id}`);
//     return response.data;
//   } catch (error) {
//     console.error(`Error fetching item with ID ${id}:`, error);
//     throw error;
//   }
// };

// // Create a new item
// export const createItem = async (item) => {
//   try {
//     const response = await axios.post(API_URL, item);
//     return response.data;
//   } catch (error) {
//     console.error('Error creating item:', error);
//     throw error;
//   }
// };

// // Update an existing item
// export const updateItem = async (id, item) => {
//   try {
//     const response = await axios.put(`${API_URL}/${id}`, item);
//     return response.data;
//   } catch (error) {
//     console.error(`Error updating item with ID ${id}:`, error);
//     throw error;
//   }
// };

// // Delete an item
// export const deleteItem = async (id) => {
//   try {
//     await axios.delete(`${API_URL}/${id}`);
//   } catch (error) {
//     console.error(`Error deleting item with ID ${id}:`, error);
//     throw error;
//   }
// };
