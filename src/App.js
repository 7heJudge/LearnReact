import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {Friends} from "./components/Friends/Friends";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {Component} from "react";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import {Preloader} from "./components/common/Preloader/Preloader";

class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if(!this.props.initialized){
            return <Preloader/>;
        }
        return (
            <BrowserRouter>
                <div className='appWrapper'>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className='appWrapperContent'>
                        <Route path='/profile/:userId?' render={() => (<ProfileContainer/>)}/>
                        <Route path='/dialogs' render={() => (<DialogsContainer/>)}/>
                        <Route path='/news' component={News}/>
                        <Route path='/music' component={Music}/>
                        <Route path='/settings' component={Settings}/>
                        <Route path='/friends' render={() => (<Friends/>)}/>
                        <Route path='/users' render={() => (<UsersContainer/>)}/>
                        <Route path='/login' render={() => (<Login/>)}/>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}
let mapStateToProps = (state) => {
  return {
      initialized: state.app.initialized
  }
};

export default connect(mapStateToProps, {initializeApp})(App);
