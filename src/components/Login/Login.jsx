import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {required} from '../../utils/validators/validators';
import {Input} from '../common/FormControls/FormControls';
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from "./../common/FormControls/FormControls.module.css"

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (        
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={"Email"} name={"email"} component={Input} validate={[required]} />
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={Input} validate={[required]} type={"password"} />
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={Input} validate={[required]}  /> remember me
            </div>

            { captchaUrl && <img src={captchaUrl} />}
            { captchaUrl &&   <Field placeholder={"Symbols from image"} name={"captcha"} component={Input} validate={[required]} /> }
           
            { error && <div className={style.formSummaryError}>
                {error}
            </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

const Login = ({login, isAuth, captchaUrl}) => {
    const onSubmit = (formData) => {       
        login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }
    if (isAuth) {
        return <Redirect to={"/profile"} />
    }
    return(
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login} )(Login);