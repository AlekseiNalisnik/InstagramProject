import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { usersInfo } from '../../../Data/usersInfo';
import { createIsAuthorizedFlag, getUsersInfo } from '../../service/Service';
import { userStatus } from '../../../Data/userStatus';
import { Redirect } from 'react-router';
import Header from '../Headers/Header';


export default class Auth extends Component {
    constructor(props) {
        super(props);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.setAuthorizingFlag = this.setAuthorizingFlag.bind(this);
        this.state = {
            isAuthorized: false
        };
    }
    

    onEmailChange(event) {
        this.props.setEmailText(event.target.value);
    }

    onPasswordChange(event) {
        this.props.setPasswordText(event.target.value);
    }

    setAuthorizingFlag(flag) {
        this.setState({ isAuthorized: flag });
    }

    onSubmit(event) {
        event.preventDefault();

        usersInfo.map( ({ email, password }, item) => {
            if(email === this.props.email && password === this.props.password) {
                this.setAuthorizingFlag(true);
                localStorage.setItem('usersInfo.name', JSON.stringify(usersInfo[item].name));
            }
        });


        this.props.setPasswordText('');
        this.props.setEmailText('');

        getUsersInfo()
            .then(() => {
                createIsAuthorizedFlag({userStatus: this.state.isAuthorized});
                userStatus[0] = {userStatus: this.state.isAuthorized};
            })
            .catch(() => console.log('Error'));

      }
 
    render() {

        return (
            <div>
                {this.state.isAuthorized ? (
                    <Redirect to="/tape" />
                ) : (
                <div>
                    <Header />
                    <div className="auth">
                        <p>Нет аккаунта?</p>
                        <Link to='/registration' className="auth__toReg">
                            Зарегистрируйтесь
                        </Link>
                        <h3>Вход</h3>
                        <form className="main_form" onSubmit={this.onSubmit}>
                            <div className="auth__email">
                                <input 
                                    className="clear_input"
                                    type="text" 
                                    name="login" 
                                    placeholder="Email" 
                                    value={this.props.email} 
                                    onChange={this.onEmailChange}
                                    autoComplete="off"
                                    required
                                />
                            </div>
                            <div className="auth__password">
                                <input 
                                    className="clear_input"
                                    type="password" 
                                    name="password" 
                                    placeholder="Пароль" 
                                    value={this.props.password} 
                                    onChange={this.onPasswordChange}
                                    autoComplete="off"
                                    required
                                />
                            </div>
                            <div className="auth__button">
                                <button className="auth__button">Войти</button>
                            </div>
                        </form>
                    </div>
                </div>
                ) }
            </div>
        );
    };
}