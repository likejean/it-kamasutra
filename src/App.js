import './App.css';
import 'antd/dist/antd.css';
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import {Component} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {initAppThunkCreator} from "./redux/initReducer";
import Loader from "./components/utils/loaders/Loader";
import store from './redux/redux-store';

// setInterval(() => {
//     store.dispatch({type: 'SET_FAKE', payload: 1});
// }, 1000);

class App extends Component {

    componentDidMount() {
        this.props.initApp();
    }

    render() {
        if(!this.props.authReady) {
            return <Loader size="large" comment="App is loading... Please, wait" />
        }
        else {
            return (
                <BrowserRouter>
                    <div className='app-wrapper'>
                        <HeaderContainer/>
                        <Navbar/>
                        <div className='app-wrapper-content'>
                            <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                            <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                            <Route path="/users" render={() => <UsersContainer/>}/>
                            <Route path="/news" component={() => <News/>}/>
                            <Route path="/music" component={() => <Music/>}/>
                            <Route path="/login" component={() => <LoginContainer/>}/>
                        </div>
                    </div>
                </BrowserRouter>
            )
        }
    }
}

const mapStateToProps = (state) => ({
    authReady: state.app.initialized
});

export default compose(withRouter,
    connect(
        mapStateToProps,
        {initApp: initAppThunkCreator}
    ))(App);
