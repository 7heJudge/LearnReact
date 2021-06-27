import cls from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import * as React from "react";
import {Field, Form, Formik} from "formik";

export const Dialogs = (props) => {
    let dialogsElements = props.messagesPage.dialogs.map(el => (
        <DialogItem id={el.id} key={el.id} name={el.name} image={el.image}/>));
    let messagesElements = props.messagesPage.messages.map(el => (<Message message={el.message} key={el.id}/>));

    let addNewMessage = (values) => {
      props.onSendMessageClick(values.newMessageBody);
    };

    return (
        <div className={cls.dialogs}>
            <div className={cls.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={cls.messages}>
                <div>{messagesElements}</div>
                <AddMessageForm addNewMessage={addNewMessage}/>
            </div>
        </div>
    );
};

const AddMessageForm = (props) => {
    const submit = (values) => {
      props.addNewMessage(values);
    };
    return (
        <div>
            <Formik initialValues={{newMessageBody: ""}}
                    onSubmit={submit}
            >
                {() => (
                    <div>
                        <Form>
                            <div><Field component="textarea" name="newMessageBody" placeholder='Write here...'/></div>
                            <div>
                                <button>Send</button>
                            </div>
                        </Form>
                    </div>
                )}
            </Formik>
        </div>
    );
};