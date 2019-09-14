import { NATIONALITIES } from '../actions/types';

const initialState = {
    nationalities: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case NATIONALITIES:
            return {
                ...state,
                nationalities: action.nationalities
            };
        default:
            return state;
    }
}