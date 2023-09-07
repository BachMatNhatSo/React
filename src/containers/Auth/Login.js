import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import './Login.scss';
import { FormattedMessage } from 'react-intl';
import { handleLoginApi } from '../../services/userService';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isShowPassword: false,
            errMessage: '',
        }
    }
    handleOnChangeUserName = (event) => {
        this.setState({
            username: event.target.value,
        })
        console.log(event.target.value);
    };
    handleOnChangePassword = (event) => {
        this.setState({
            password: event.target.value,
        })
        console.log(event.target.value);
    }
    handleLogin = async () => {
        this.setState({
            errMessage: ''
        })
        try {
            let data = await handleLoginApi(this.state.username, this.state.password)
            if (data && data.errCode !== 0) {
                this.setState({
                    errMessage: data.message
                })
            }
            if (data && data.errCode === 0) {
                this.props.userLoginSuccess(data.user)
                console.log('login success')

            }

        } catch (error) {
            if (error.response) {
                if (error.response.data) {
                    this.setState({
                        errMessage: error.response.data.message
                    });
                }
            }
            console.log('duynhan', error.response);
        }

    }
    handleShowHidePassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
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
                            <input type="text" className="form-control" placeholder='Enter your Username' value={this.state.username}
                                onChange={(event) => { this.handleOnChangeUserName(event) }}
                            />
                        </div>
                        <div className='col-12-form-group login-input'>
                            <labe>Password</labe>
                            <div className='custom-input-password'>
                                <input className="form-control"
                                    type={this.state.isShowPassword ? 'text' : 'password'}
                                    placeholder='Enter your Password'
                                    value={this.state.password}
                                    onChange={(event) => { this.handleOnChangePassword(event) }} />
                                <span onClick={() => { this.handleShowHidePassword() }}>

                                    <i className={this.state.isShowPassword ? 'far fa-eye' : 'far fa-eye-slash'}></i>
                                </span>
                            </div>

                        </div>
                        <div className='col-12 ' style={{ color: 'red' }}>
                            {this.state.errMessage}
                            <button className="btn-login" onClick={() => { this.handleLogin() }} >Login</button>
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
        //userLoginFail: () => dispatch(actions.adminLoginFail()),
        userLoginSuccess: (userInfor) => dispatch(actions.userLoginSuccess(userInfor))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
