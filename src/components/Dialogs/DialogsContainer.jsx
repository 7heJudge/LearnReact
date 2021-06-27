import * as React from "react";
import {sendMessageCreator} from "../../redux/messages-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        onSendMessageClick: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody));
        }
    };
};

export const DialogsContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);


