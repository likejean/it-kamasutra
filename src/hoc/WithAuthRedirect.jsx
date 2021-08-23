import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});


const WithAuthRedirect = (Component) => {  //HOC body
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to='/login'/>
            //возвращаем контейнерную Компоненту для оборачивания целевой (презентационной) компоненты

            return <Component {...this.props} />
        }
    }
    return connect(mapStateToProps)(RedirectComponent);
}

export default WithAuthRedirect;


