import { FETCH_USERS, REMOVE_USERS, SEARCH_USER, ASSIGN_USERS_TO_FILTERED, LOADING } from '../actions/types';

const initialState = {
    users: [],
    filteredUser: [],
    loading: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS:
            return {
                ...state,
                users: state.users.concat(action.users)
            };
        case REMOVE_USERS:
            return {
                ...state,
                users: action.users
            }
        case SEARCH_USER:
            return {
                ...state,
                filteredUser: action.filteredUser
            }
        case ASSIGN_USERS_TO_FILTERED:
            return {
                ...state,
                filteredUser: action.filteredUser
            }
        case LOADING:
            return {
                ...state,
                loading: action.loading
            }
        default:
            return state;
    }
}