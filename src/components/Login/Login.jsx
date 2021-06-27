import * as React from 'react';
import {Field, Form, Formik} from "formik";

export let Login = () => {
    // const onSubmit = (formData) => {
    //     console.log(formData);
    // };
    return (
        <div>
            <h1>Login</h1>
            <LoginForm/>
        </div>
    );
};

let LoginForm = () => {
    return (
        <div>
            <Formik initialValues={{login: '', password: ''}}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
            >
                {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
                    <div>
                        <Form onSubmit={handleSubmit}>
                            <div><Field type="text" name="login" placeholder={"Login"} onChange={handleChange} onBlur={handleBlur}/></div>
                            <div><Field type="password" name="password" placeholder={"Password"} onChange={handleChange} onBlur={handleBlur}/></div>
                            <div><Field type="checkbox" name="rememberMe" onChange={handleChange} onBlur={handleBlur}/>Remember me</div>
                            <div>
                                <button type="submit" disabled={!isValid && !dirty}>
                                    Login
                                </button>
                            </div>
                        </Form>
                    </div>
                )}
            </Formik>
        </div>
    );
};