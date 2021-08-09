import cls from './MyPosts.module.css';
import {Post} from "./Post/Post";
import * as React from "react";
import * as yup from 'yup';
import {Field, Form, Formik} from "formik";

export const MyPosts = (props) => {
    const person = {
        name: 'bot',
        age: 0,
        phone: 2324424,
        info: function (phone) {
            console.log(`Name: ${this.name}`)
            console.log(`Age: ${this.age}`)
            console.log(`Phone: ${phone}`)
        }
    }
    const yan = {
        name: 'yan',
        age: 19
    }

    person.info.apply(yan, [564645643])
    let postsElements = props.posts.map(el => (<Post message={el.message} key={el.id} likeCounts={el.likeCounts}/>));
    let onAddPost = (values) => {
        props.addPost(values.message);
    };
    return (
        <div className={cls.postsBlock}>
            <h3>My posts</h3>
            <PostsForm onAddPost={onAddPost}/>
            <div className={cls.posts}>
                {postsElements}
            </div>
        </div>
    );
};

let PostsForm = (props) => {
    const validationMessageSchema = yup.object().shape({
        message: yup.string().typeError('Should be a string').required('Required')
    });
    const submit = (values) => {
        props.onAddPost(values);
    };
    return (
        <div>
            <Formik initialValues={{message: ""}}
                    validateOnBlur
                    onSubmit={submit}
                    validationSchema={validationMessageSchema}
            >
                {({errors, touched}) => (
                    <div>
                        <Form>
                            <Field component={"textarea"} name="message" placeholder="Write here..."/>
                            {touched.message && errors.message && <div className={cls.error}>{errors.message}</div>}
                            <div>
                                <button>Add post</button>
                            </div>
                        </Form>
                    </div>
                )}
            </Formik>
        </div>
    );
};