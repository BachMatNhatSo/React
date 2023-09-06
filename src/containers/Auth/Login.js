import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import './Login.scss';
import { FormattedMessage } from 'react-intl';

class Login extends Component {
    constructor(props) {
        super(props);
    }
    //JSX
    render() {
        return (
            <div className='login-background'>
                <div className='login-container'>
                    <div className='login-content row'>
                        <div className='col-12- text-login'>Login</div>
                        <div className='col-12-form-group login-input'>
                            <labe>UserName</labe>
                            <input type="text" className="form-control" placeholder='Enter your Username' />
                        </div>
                        <div className='col-12-form-group login-input'>
                            <labe>Password</labe>
                            <input type="password" className="form-control" placeholder='Enter your Password' />
                        </div>
                        <div className='col-12 ' >
                            <button className="btn-login">Login</button>
                        </div>
                        <div className='col-12'>
                            <span className="forgot-Password">Forgot your password?</span>
                        </div>
                        <div className='col-12 text-center'>
                            <span className='text-other-login'>Or Login With</span>
                        </div>
                        <div className='col-12 social-login'>
                            <i className='fab fa-google-plus-g google'></i>
                            <i className='fab fa-facebook-f facebook'></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
