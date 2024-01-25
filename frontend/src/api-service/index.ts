
import axios from 'axios';
const apiURL = 'http://localhost:3000/';

const apiService = axios.create({
  baseURL: apiURL,
  withCredentials: true,
});

const createUser = async (user: any) => {
    const response = await apiService.post('user', user);
    return response;
};

const getAllQuestions = async () => {
    const response = await apiService.get('questions');
    return response.data;
};

const getAllAnswers = async () => {
    const response = await apiService.get('answers');
    return response.data;
};

const calculatePersonalityType = async (userResponses: any[]) => {
    const response = await apiService.post('question-trait-mapping/calculate-personality-type', userResponses);
    return response.data;
};


export {getAllQuestions, getAllAnswers, calculatePersonalityType, createUser}