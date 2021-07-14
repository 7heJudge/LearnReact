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
    const Submit = (values) => {
        console.log(values);
        props.login(values.email, values.password, values.rememberMe);
    };
    return (
        <div>
            <Formik initialValues={{email: '', password: '', rememberMe: false}}
                    onSubmit={Submit}
                    validationSchema={validationLoginSchema}
            >
                {({errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
                    <div>
                        <h1>Login</h1>
                        <Form onSubmit={handleSubmit}>
                            <div><Field type="email" name="email" placeholder={"Email"} onChange={handleChange} onBlur={handleBlur}/></div>
                            {touched.email && errors.email && <div className={cls.error}>{errors.email}</div>}
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

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    };
};

export default connect(mapStateToProps, {login})(Login);