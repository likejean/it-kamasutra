import './App.css';
import 'antd/dist/antd.css';
import Header from './components/Header/Header';
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import {BrowserRouter, Route} from "react-router-dom";

const App = ({profilePage, messagesPage}) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <Navbar />
                <div className='app-wrapper-content'>
                    <Route path="/profile" render={() => <Profile state={profilePage} />} />
                    <Route path="/dialogs" render={() => <Dialogs state={messagesPage} />} />
                    <Route path="/news" component={() => <News />} />
                    <Route path="/music" component={() => <Music />} />
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
