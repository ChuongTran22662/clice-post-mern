import axios from 'axios';

const URL = 'http://localhost:5000';

export const fetchPosts = () => axios.get(`${URL}/posts`);

export const createPost = (payload) => axios.post(`${URL}/posts`, payload);

export const updatePost = (payload) => {
    console.log(payload);
    return axios.post(`${URL}/posts/update`, payload)
};

export const deletePost = (payload) => {
    console.log(payload);
    return axios.post(`${URL}/posts/delete`, payload)
};