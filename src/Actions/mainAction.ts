import * as action from "./types";

export const toggleMenu = () => (dispatch: any, getState: any) => {
    const open = getState().main.open;
    dispatch({
        type: action.TOGGLE_MENU,
        payload: !open
    })
}

export const setScreen = (screen: string) => (dispatch: any) => {
    if (!screen) return;
    dispatch({
        type: action.SET_SCREEN,
        payload: screen.toUpperCase()
    })
}