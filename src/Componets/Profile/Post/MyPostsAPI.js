import React from 'react'
import './MyPosts.module.css'
import { AddPostAC, updateNewPostTextAC } from '../../../Redux/Profile_reducer'
import MyPosts from './MyPosts'
import { useDispatch, useSelector } from 'react-redux'
const MyPostsAPI = () => {
  const dispatch = useDispatch()
  const { posts, newPostText } = useSelector(state => state.profilePage)
  const updateNewPostText = text => {
    const action = updateNewPostTextAC(text)
    dispatch(action)
  }
  const addPost = () => {
    dispatch(AddPostAC())
  }
  return <MyPosts addPost={addPost} updateNewPostText={updateNewPostText} posts={posts} newPostText={newPostText} />
}

export default MyPostsAPI
