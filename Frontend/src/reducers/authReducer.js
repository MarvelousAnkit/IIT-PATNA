import * as actionTypes from '../actions/types';
import jwt from 'jwt-decode' 
const initialState = {
    userID: null,
    userMail: null,
    isAuthenticated: false,
    userName: null,
    userRollNo: null,
    accessToken: null,
    refreshToken: null,
    test: "dummy"
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.APP_LOADING:
            return {
                ...state,
                loading: action.payload
            };
        case actionTypes.USER_LOGIN:
            localStorage.setItem('accessToken', action.payload.accessToken);
            localStorage.setItem('refreshToken', action.payload.refreshToken);
            const { id, mail, name, rollNo } = jwt(action.payload.accessToken);
            return {
                ...state,
                userID: id,
                userMail: mail,
                isAuthenticated: true,
                userName: name,
                userRollNo: rollNo,
                accessToken: action.payload.accessToken,
                refreshToken: action.payload.refreshToken
            };
        case actionTypes.USER_REGISTER:
            return {
                ...state,
                loading: false
            };
        case actionTypes.LOGOUT:
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            return {
                ...state,
                userID: null,
                userMail: null,
                isAuthenticated: false,
                userName: null,
                userRollNo: null,
                accessToken: null,
                refreshToken: null
            };
        case actionTypes.SET_AUTHENTICATED:
            return {
                ...state,
                isAuthenticated: true
            };
        case actionTypes.SET_UNAUTHENTICATED:
            return {
                ...state,
                isAuthenticated: false
            };
        case actionTypes.REFRESH_TOKEN:
            return {
                ...state,
                isAuthenticated: true,
                accessToken: action.payload.accessToken,
                refreshToken: action.payload.refreshToken
            };
        default:
            return state;
    }
};

export default authReducer;
