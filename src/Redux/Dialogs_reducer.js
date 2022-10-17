const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'
const initialState = {
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
}
const dialogs_reducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            return  {
                ...state,
                newMessageText: action.body
            }
        case SEND_MESSAGE:
            const body = state.newMessageText
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, {id: "6", message: body}]
            }
        default:
            return state
    }
}
export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}
export const updateNewMessageBody = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        body
    }
}
export default dialogs_reducer