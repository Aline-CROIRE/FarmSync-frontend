import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const fetchStocks = async () => {
    try {
        const response = await axios.get(`${API_URL}/stocks`);
        return response.data;
    } catch (error) {
        console.error('Error fetching stocks:', error);
    }
};

export const updateStock = async (id, quantity) => {
    try {
        await axios.put(`${API_URL}/stocks/${id}`, { quantity });
    } catch (error) {
        console.error('Error updating stock:', error);
    }
};
