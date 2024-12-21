import { API_URL, FILTER } from './constants.js';
export const getList = async (queryFilter = '') => {
    const queryParam = `${queryFilter.length ? `?${FILTER}=${queryFilter}` : ''}`;
    const URL = `${API_URL}${queryParam}`;
    return fetch(URL)
        .then((response) => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Something went wrong');
    })
        .catch((error) => {
        console.log(error);
    });
};
