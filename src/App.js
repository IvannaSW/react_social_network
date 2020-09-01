import React from 'react';
import './App.css';
import {Route, withRouter, Redirect, Switch} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import {withSuspense} from "./hoc/withSuspens";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render(){
    if (!this.props.initialized) {
      return <Preloader/>
    }
    return (    
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
        <Switch>
          <Route exact path='/' render={() => <Redirect to={"/profile"}/>}/>
          <Route path='/dialogs' render={withSuspense(DialogsContainer)}/>
          <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)} />
          <Route path='/users'render={() => <UsersContainer />} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
          <Route path='/login' component={LoginPage} />
          <Route path='*' render={() => <div>404 NOT FOUND</div>}/>
        </Switch>           
        </div>        
      </div>        
    );
  };
}
const mapStateToProps = (state) => ({
  initialized: state.app.initialized
});
export default compose(
  withRouter,
  connect(mapStateToProps, {initializeApp}))(App);