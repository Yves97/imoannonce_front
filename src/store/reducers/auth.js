import * as actionTypes from '../types/auth'

const initialState = {
    isLoggedIn : false
}

const authReducer = (state = initialState,action) =>{
    switch(action.type){
        case actionTypes.IS_LOGGED_IN:
            return {
                ...state,
                isLoggedIn : action.value
            }
        default:
            return state
    }
}
export {authReducer}