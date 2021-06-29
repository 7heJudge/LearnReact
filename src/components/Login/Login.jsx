import * as React from 'react';
import {Field, Form, Formik} from "formik";
import * as yup from 'yup';
import cls from './Login.module.css';

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
    const validationLoginSchema = yup.object().shape({
        login: yup.string().typeError('Should be a string').required('Required'),
        password: yup.string().typeError('Should be a string').required('Required')
    });
    return (
        <div>
            <Formik initialValues={{login: '', password: ''}}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                    validationSchema={validationLoginSchema}
            >
                {({errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
                    <div>
                        <Form onSubmit={handleSubmit}>
                            <div><Field type="text" name="login" placeholder={"Login"} onChange={handleChange} onBlur={handleBlur}/></div>
                            {touched.login && errors.login && <div className={cls.error}>{errors.login}</div>}
                            <div><Field type="password" name="password" placeholder={"Password"} onChange={handleChange} onBlur={handleBlur}/></div>
                            {touched.password && errors.password && <div className={cls.error}>{errors.password}</div>}
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