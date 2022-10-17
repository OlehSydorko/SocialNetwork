import React from 'react'
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { Navigate } from 'react-router-dom'

const Dialogs = ({ messages, sendMessage, updateNewMessage, isAuth, newMessageText, dialogs }) => {
  const dialogElements = dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />)
  const messageElements = messages.map(message => <Message key={message.id} message={message.message} />)
  const newMessageBody = newMessageText

  const addMessage = () => {
    sendMessage()
  }
  const onNewMessageChange = e => {
    const body = e.target.value
    updateNewMessage(body)
  }
  if (isAuth === false) return <Navigate to={'/login'} />

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItem}>{dialogElements}</div>
      <div className={classes.messages}>
        <div>{messageElements}</div>
        <div className={classes.myMessages}>
          <textarea placeholder='Enter your message' onChange={onNewMessageChange} value={newMessageBody} />
        </div>
        <div className={classes.Button}>
          <button onClick={addMessage}>Create message</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs
