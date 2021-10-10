import axios from 'axios';

export const getRandomJokes = () => (dispatch) => {
    axios
        .get(`https://api.chucknorris.io/jokes/random`)
        .then((response) => {
            if (response.status === 200) {
                console.log(response);
                dispatch({
                    type: "GET_RANDOM_JOKES",
                    payload: response.data,
                });
            }
        })
        .catch((err) => console.log(err));
}

export const getListCategory = () => (dispatch) => {
    axios
        .get(`https://api.chucknorris.io/jokes/categories`)
        .then((response) => {
            if (response.status === 200) {
                console.log(response);
                dispatch({
                    type: "GET_LIST_CATEGORY",
                    payload: response.data,
                });
            }
        })
        .catch((err) => console.log(err));
}

export const getJokesBySearch = (query) => (dispatch) => {
    axios
        .get(`https://api.chucknorris.io/jokes/search?query=${query}`)
        .then((response) => {
            if (response.status === 200) {
                console.log(response);
                dispatch({
                    type: "GET_BY_SEARCH",
                    payload: response.data,
                });
            }
        })
        .catch((err) => console.log(err));
}

export const getJokesByCategory = (category) => (dispatch) => {
    axios
        .get(`https://api.chucknorris.io/jokes/random?category=${category}`)
        .then((response) => {
            if (response.status === 200) {
                console.log(response);
                dispatch({
                    type: "GET_BY_CATEGORY",
                    payload: response.data,
                });
            }
        })
        .catch((err) => console.log(err));
}