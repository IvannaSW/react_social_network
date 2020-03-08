import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = (props) => {
  return (    
    <div className='app-wrapper'>
      <Header />
      <Navbar friends={props.state.sidebarPage.friends}/>
      <div className='app-wrapper-content'>
        <Route path='/dialogs' render={() => <Dialogs store={props.store} />} />
        <Route path='/profile'render={() => <Profile posts={props.state.profilePage.posts} newPostText={props.state.profilePage.newPostText } dispatch={props.dispatch}  />} />
        <Route path='/news' component={News} />
        <Route path='/music' component={Music} />
        <Route path='/settings' component={Settings} />          
      </div>        
    </div>        
  );
}
export default App;