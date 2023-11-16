import * as actionTypes from '../actions/types';

const initialState = {
    isLoading : false
}

const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.APP_LOADING:
			return {
				...state,
				isLoading: action.payload,
			};
		default:
			return state;
	}
};
export default appReducer;