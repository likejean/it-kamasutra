import {sendMessageCreator, updateMessageCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";


const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSendMessageClick: () => dispatch(sendMessageCreator()),
        onMessageTextChange: (payload) => dispatch(updateMessageCreator(payload))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Dialogs);
