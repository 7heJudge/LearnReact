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

const App = (props) => {
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
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
