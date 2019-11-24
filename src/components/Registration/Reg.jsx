import React, { Component  } from 'react';
import { Link } from 'react-router-dom';
import { createUsersInfo } from '../../service/Service';
import { usersInfo } from '../../../Data/usersInfo';
import { Redirect } from 'react-router';
import Header from '../Headers/Header';

export default class Reg extends Component {
    constructor(props) {
        super(props);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onFullNameChange = this.onFullNameChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.setRegistratedFlag = this.setRegistratedFlag.bind(this);
        this.state = {
            isRegistrated: false
        };
    }
    

    onEmailChange(event) {
        this.props.setEmailText(event.target.value);
    }

    onPasswordChange(event) {
        this.props.setPasswordText(event.target.value);
    }

    onNameChange(event) {
        this.props.setNameText(event.target.value);
    }

    onFullNameChange(event) {
        this.props.setFullNameText(event.target.value);
    }

    setRegistratedFlag(flag) {
        this.setState({ isRegistrated: flag });
    }

    onSubmit(event) {
        event.preventDefault();
    
        const { fullName, name, email, password } = this.props;

        usersInfo.push(
            {
                fullName,
                name,
                email,
                password
            }
        );

        this.props.setEmailText('');
        this.props.setPasswordText('');
        this.props.setNameText('');
        this.props.setFullNameText('');

        createUsersInfo(usersInfo)
            .then(() => this.setRegistratedFlag(true))
            .catch(() => console.log('Error'));

      }

    render() {
        return (
            <div>
                {this.state.isRegistrated ? <Redirect to="/" /> : (
                <div>
                    <Header />
                    <div className="reg">
                        <p>Уже зарегистрированы?</p>
                        <Link to='/' className="reg__toAuth">
                            Войдите
                        </Link>
                        <h3>Регистрация</h3>
                        <form className="main_form" onSubmit={this.onSubmit}>
                            <div className="reg__fullName">
                                <input 
                                    className="clear_input"
                                    type="text" 
                                    name="fullName" 
                                    placeholder="Полное имя" 
                                    value={this.props.fullName}
                                    onChange={this.onFullNameChange}
                                    autoComplete="off"
                                    required
                                />
                            </div>
                            <div className="reg__name">
                                <input 
                                    className="clear_input"
                                    type="text" 
                                    name="name" 
                                    placeholder="Имя пользователя"
                                    value={this.props.name}
                                    onChange={this.onNameChange}
                                    autoComplete="off"
                                    required
                                />
                            </div>
                            <div className="reg__email">
                                <input 
                                    className="clear_input"
                                    type="email" 
                                    name="email" 
                                    placeholder="Email" 
                                    value={this.props.email}
                                    onChange={this.onEmailChange}
                                    autoComplete="off"
                                    required
                                />
                            </div>
                            <div className="reg__password">
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
                            <div className="reg__button">
                            <button className="reg__button">Зарегистрироваться</button>
                            </div>
                        </form>
                    </div> 
                </div>
                ) }
            </div>
        );
    };
}