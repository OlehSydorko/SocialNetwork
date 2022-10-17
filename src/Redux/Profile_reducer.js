import { usersAPI } from '../API/API'

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const initialState = {
  posts: [
    { id: '1', message: 'Hi', countLikes: 2 },
    { id: '2', message: "It's my first post", countLikes: 20 },
    { id: '3', message: 'Pull up', countLikes: 90 },
  ],
  newPostText: '',
  profile: null,
}
const profile_reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      const newPost = {
        id: '5',
        message: state.newPostText,
        countLikes: 0,
      }
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: '',
      }
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText,
      }
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      }
    }
    default:
      return state
  }
}
export const updateNewPostTextAC = newText => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText,
  }
}
export const AddPostAC = () => {
  return {
    type: ADD_POST,
  }
}
export const setUserProfileAC = profile => {
  return {
    type: SET_USER_PROFILE,
    profile,
  }
}

export const getProfile = userId => {
  return dispatch => {
    usersAPI.getProfile(userId).then(data => {
      dispatch(setUserProfileAC(data))
    })
  }
}

export default profile_reducer
