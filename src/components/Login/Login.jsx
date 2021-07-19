import * as React from 'react';
import {Field, Form, Formik} from "formik";
import * as yup from 'yup';
import cls from './Login.module.css';
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

let Login = (props) => {
    if(props.isAuth) return <Redirect to={"/profile"}/>
    return (
        <div>
            {!props.isAuth && <LoginForm login={props.login}/>}
        </div>
    );
};

let LoginForm = (props) => {
    const validationLoginSchema = yup.object().shape({
        email: yup.string().typeError('Should be a string').required('Required').email('Input your email'),
        password: yup.string().typeError('Should be a string').required('Required')
    });
    const Submit = (values, {setSubmitting, setStatus, resetForm}) => {
        console.log(values);
        setSubmitting(false);
        setStatus();
        props.login(values.email, values.password, values.rememberMe, setSubmitting, setStatus);
        resetForm();
    };
    return (
        <div>
            <Formik initialValues={{email: '', password: '', rememberMe: false}}
                    onSubmit={Submit}
                    validationSchema={validationLoginSchema}
            >
                {({isSubmitting, errors, touched, status}) => (
                    <div>
                        <h1>Login</h1>
                        <Form>
                            <div><Field type="email" name="email" placeholder={"Email"}/></div>
                            {touched.email && errors.email && <div className={cls.error}>{errors.email}</div>}
                            <div><Field type="password" name="password" placeholder={"Password"}/></div>
                            {touched.password && errors.password && <div className={cls.error}>{errors.password}</div>}
                            <div><Field type="checkbox" name="rememberMe"/>Remember me</div>
                            <div>
                                {status && status.errorMessages && <div className={cls.error}>{status.errorMessages}</div>}
                                <button type="submit" disabled={isSubmitting}>
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

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    };
};

export default connect(mapStateToProps, {login})(Login);