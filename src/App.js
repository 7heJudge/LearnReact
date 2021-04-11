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
                    <Route path='/profile' render={() => (<Profile profilePage={props.store.profilePage}
                                                                   addPost={props.store.addPost}
                                                                   updateNewPostText={props.store.updateNewPostText}/>)}/>
                    <Route path='/dialogs' render={() => (<Dialogs messagesPage={props.store.messagesPage}
                                                                   addMessage={props.store.addMessage}
                                                                   updateNewMessageText={props.store.updateNewMessageText}/>)}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/friends' render={() => (<Friends friends={props.store.friendsPage.friends}/>)}/>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
