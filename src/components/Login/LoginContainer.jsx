import {connect} from "react-redux";
import {compose} from "redux";
import Login from "./Login";
import {login} from "../../redux/authReducer";


//Контейнерная компонента
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default compose(connect(mapStateToProps,{login}))(Login);