import {sendMessageCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import WithAuthRedirect from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
import {getDialogs, getMessage} from "../../selectors/messagesSelectors";


const mapStateToProps = (state) => ({
        dialogs: getDialogs(state),
        messages: getMessage(state)
    });



//Which Order?: connect() ------> AuthRedirect() HOC ----->  <DialogsContainer /> -----> <Dialogs />
export default compose(
    connect(
        mapStateToProps,
        {onSendMessageClick: sendMessageCreator}
    ),
    WithAuthRedirect //оборачиваем ХОКом DialogsContainer, которая в свою очередь оборачивает Dialogs целевую компоненту для атентификационного перенаправления
)(Dialogs)
