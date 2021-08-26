import {sendMessageCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import WithAuthRedirect from "../../hoc/WithAuthRedirect";
import {compose} from "redux";


const mapStateToProps = (state) => ({
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText
});



//Which Order?: connect() ------> AuthRedirect() HOC ----->  <DialogsContainer /> -----> <Dialogs />
export default compose(
    connect(
        mapStateToProps,
        {onSendMessageClick: sendMessageCreator}
    ),
    WithAuthRedirect //оборачиваем ХОКом DialogsContainer, которая в свою очередь оборачивает Dialogs целевую компоненту для атентификационного перенаправления
)(Dialogs)
