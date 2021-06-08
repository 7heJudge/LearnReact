import * as React from "react";
import {
    updateNewMessageBodyCreator,
    sendMessageCreator
} from "../../redux/messages-reducer";
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
        onSendMessageClick: () => {
            dispatch(sendMessageCreator());
        },
        onMessageChange: (body) => {
            let action = updateNewMessageBodyCreator(body);
            dispatch(action);
        }
    };
};

export const DialogsContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);


