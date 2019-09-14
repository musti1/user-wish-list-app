import { FETCH_USERS, ASSIGN_USERS_TO_FILTERED, LOADING } from './types';
import store from '../config/store';

export const fetch_users = (nationalities) => dispatch => {
    dispatch({
        type: LOADING,
        loading: true
    })
    fetch(`https://randomuser.me/api/?page=1&results=50&nat=${nationalities}`)
        .then(res => res.json())
        .then(res => {
            dispatch({
                type: FETCH_USERS,
                users: res.results
            })
        })
        .then(() => {
            dispatch({
                type: ASSIGN_USERS_TO_FILTERED,
                filteredUser: store.getState().home.users
            })
            dispatch({
                type: LOADING,
                loading: false
            })
        })
        .catch(error => {
            console.log(error);
        })
}