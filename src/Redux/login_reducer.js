import {loginAPI} from "../API/API";
import {toggleIsTouchingProgressAC} from "./Users_reducer";

export const getTouched = () => {
    return (dispatch) => {
        dispatch(toggleIsTouchingProgressAC(true))
        loginAPI.login().then(data => {
                dispatch(toggleIsTouchingProgressAC(false))
            }
        )
    }
}
