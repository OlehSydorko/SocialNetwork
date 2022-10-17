import profile_reducer from "./Profile_reducer";
import dialogs_reducer from "./Dialogs_reducer";

const store = {
    _state: {
        dialogsPage: {
            messages: [
                {id: "1", message: 'Hi'},
                {id: "2", message: 'Hello'},
                {id: "3", message: 'Noob'}
            ],
            dialogs: [
                {id: "1", name: 'Oleh'},
                {id: "2", name: 'Dmitry'},
                {id: "3", name: 'Andrey'}
            ],
            newMessageText: ''
        },
        profilePage: {
            posts: [
                {id: "1", message: 'Hi', countLikes: 2},
                {id: "2", message: 'It\'s my first post', countLikes: 20},
                {id: "3", message: 'Pull up', countLikes: 90}
            ],
            newPostText: 'puk'
        },
        _rerenderEntireTree() {
            console.log('State changed')
        },

        getState() {
            return this._state
        },

        dispatch(action) {
            this._state.profilePage = profile_reducer(this._state.profilePage, action)
            this._state.dialogsPage = dialogs_reducer(this._state.dialogsPage, action)

            this._rerenderEntireTree(this._state)
        }
    }
}

window.store = store
