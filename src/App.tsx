import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './Componets/Nav/Nav'
import News from './Componets/News/news'
import Settings from './Componets/Settings/settings'
import Music from './Componets/Music/music'
import './App.css'
import DialogsAPI from './Componets/Dialogs/DialogsAPI'
import UsersAPIComponent from './Componets/Users/UsersAPIComponent'
import HeaderAPI from './Componets/Header/HeaderAPI'
import Login from './Componets/login/Login'
import Profile from './Componets/Profile/Profile'

const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <HeaderAPI />
        <Nav />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile/:userId' element={<Profile />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/dialogs' element={<DialogsAPI />} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/users' element={<UsersAPIComponent />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}
export default App
