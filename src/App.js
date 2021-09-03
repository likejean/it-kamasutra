import React, {Component} from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initAppThunkCreator} from "./redux/initReducer";
import Loader from "./components/utils/loaders/Loader";
import store from "./redux/redux-store";
import {WithSuspenseComponent} from "./hoc/WithSuspence";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"));

class App extends Component {

    componentDidMount() {
        this.props.initApp();
    }

    render() {
        if (!this.props.authReady) {
            return <Loader size="large" comment="App is loading... Please, wait"/>
        } else {
            return (
                <BrowserRouter>
                    <div className='app-wrapper'>
                        <HeaderContainer/>
                        <Navbar/>
                        <div className='app-wrapper-content'>
                            <Route path="/profile/:userId?" render={WithSuspenseComponent(ProfileContainer)}/>
                            <Route path="/dialogs" render={WithSuspenseComponent(DialogsContainer)}/>
                            <Route path="/users" render={WithSuspenseComponent(UsersContainer)}/>
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

const AppContainer = compose(withRouter,
    connect(
        mapStateToProps,
        {initApp: initAppThunkCreator}
    ))(App);

const Main = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    )
}

export default Main;