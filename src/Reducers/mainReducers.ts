import * as actions from '../Actions/types';

const initialState = {
    open: false,
    screen: 'START'
}

interface Action {
    type: String;
    payload?: any
}

export default function(state = initialState, action: Action) {
    const { type, payload } = action;
    switch (type) {
        case actions.TOGGLE_MENU:{
            return {
                ...state,
                open: payload
            }
        }
        case actions.SET_SCREEN:{
            return {
                ...state,
                screen: payload
            }
        }
        default: 
            return state;
    }
}