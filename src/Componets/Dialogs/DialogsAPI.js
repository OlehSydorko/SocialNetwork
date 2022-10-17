import { sendMessageCreator, updateNewMessageBody } from '../../Redux/Dialogs_reducer'
import Dialogs from './Dialogs'
import { useDispatch, useSelector } from 'react-redux'

const DialogsAPI = () => {
  const dispatch = useDispatch()
  const { dialogs, messages, newMessageText } = useSelector(state => state.dialogsPage)
  const { isAuth } = useSelector(state => state.auth)
  const updateNewMessage = body => {
    dispatch(updateNewMessageBody(body))
  }
  const sendMessage = () => {
    dispatch(sendMessageCreator())
  }
  return (
    <Dialogs
      newMessageText={newMessageText}
      messages={messages}
      dialogs={dialogs}
      isAuth={isAuth}
      updateNewMessage={updateNewMessage}
      sendMessage={sendMessage}
    />
  )
}

export default DialogsAPI
