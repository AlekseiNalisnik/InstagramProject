import React, { Component } from 'react';

export default class Reg extends Component {
    constructor(props) {
        super(props);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onRepeatPasswordChange = this.onRepeatPasswordChange.bind(this);
    }
    

    onEmailChange(event) {
        this.props.setEmailText(event.target.value);
    }

    onPasswordChange(event) {
        this.props.setPasswordText(event.target.value);
    }

    onRepeatPasswordChange(event) {
        this.props.setRepeatPasswordText(event.target.value);
    }

    render() {
        return (
            <div className="reg">
                <h3>Sign Up</h3>
                <form>
                    <div>
                        <input 
                            type="text" 
                            name="login" 
                            placeholder="E-mail" 
                            value={this.props.email}
                            onChange={this.onEmailChange}
                        />
                    </div>
                    <div>
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Password"
                            value={this.props.password}
                            onChange={this.onPasswordChange}
                        />
                    </div>
                    <div>
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Repeat password" 
                            value={this.props.repeatPassword}
                            onChange={this.onRepeatPasswordChange}
                        />
                    </div>
                    <div>
                        <button>Sign Up</button>
                    </div>
                </form>
            </div>
        );
    };
}