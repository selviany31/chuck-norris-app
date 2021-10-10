/* eslint-disable import/no-anonymous-default-export */
const initialState = {
    jokes: [],
    listCategory: [],
    jokesBySearch: [],
    jokesByCategory: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "GET_RANDOM_JOKES":
            return {
                ...state,
                jokes: action.payload,
            };
        case "GET_LIST_CATEGORY":
            return {
                ...state,
                listCategory: action.payload,
            };
        case "GET_BY_SEARCH":
            return {
                ...state,
                jokesBySearch: action.payload,
            };
        case "GET_BY_CATEGORY":
            return {
                ...state,
                jokesByCategory: action.payload,
            };
        default:
            break;
    }
    return state;
}