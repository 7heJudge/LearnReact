import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {Friends} from "./components/Friends/Friends";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='appWrapper'>
                <Header/>
                <Navbar/>
                <div className='appWrapperContent'>
                    <Route path='/profile' render={() => (<Profile profilePage={props.state.profilePage}
                                                                   addPost={props.addPost}
                                                                   updateNewPostText={props.updateNewPostText}/>)}/>
                    <Route path='/dialogs' render={() => (<Dialogs messagesPage={props.state.messagesPage}
                                                                   addMessage={props.addMessage}
                                                                   updateNewMessageText={props.updateNewMessageText}/>)}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/friends' render={() => (<Friends friends={props.state.friendsPage.friends}/>)}/>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
