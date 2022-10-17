import React from 'react'
import classes from './MyPosts.module.css'
import Posts from './All posts/Post'

const MyPosts = ({ addPost, updateNewPostText, posts, newPostText }) => {
  const PostsElements = posts.map(post => <Posts key={post.id} message={post.message} countLikes={post.countLikes} />)

  const onAddPost = () => {
    addPost()
  }
  const onPostChange = e => {
    const text = e.target.value
    updateNewPostText(text)
  }
  return (
    <div className={classes.myPosts}>
      <h3>My posts</h3>
      <div>
        <textarea placeholder='Enter your post' onChange={onPostChange} value={newPostText} />
      </div>
      <div>
        <button onClick={onAddPost}>Create post</button>
      </div>
      <div className={classes.post}>{PostsElements}</div>
    </div>
  )
}
export default MyPosts
