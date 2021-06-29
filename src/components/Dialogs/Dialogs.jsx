import cls from './Dialogs.module.css';
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import * as React from "react";
import {Field, Form, Formik} from "formik";
import * as yup from 'yup';

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
    const validationDialogSchema = yup.object().shape({
        newMessageBody: yup.string().typeError('Should be a string').required('Required')
    });
    return (
        <div>
            <Formik initialValues={{newMessageBody: ""}}
                    onSubmit={submit}
                    validationSchema={validationDialogSchema}
            >
                {({errors, touched}) => (
                    <div>
                        <Form>
                            <div><Field component="textarea" name="newMessageBody" placeholder='Write here...'/></div>
                            {touched.newMessageBody && errors.newMessageBody && <div className={cls.error}>{errors.newMessageBody}</div>}
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