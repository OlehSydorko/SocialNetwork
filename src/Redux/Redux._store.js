import {applyMiddleware, combineReducers, createStore} from "redux";
import profile_reducer from "./Profile_reducer";
import dialogs_reducer from "./Dialogs_reducer";
import users_reducer from "./Users_reducer";
import auth_reducer from "./auth.reducer";
import thunkMiddleware from "redux-thunk"


const reducers = combineReducers({
    profilePage: profile_reducer,
    dialogsPage: dialogs_reducer,
    usersPage: users_reducer,
    auth: auth_reducer,
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store
export default store