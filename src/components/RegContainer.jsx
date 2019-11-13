import React, { Component } from 'react';
import { connect } from 'react-redux';
import Reg from './Reg';
import { setEmailText, setPasswordText, setRepeatPasswordText } from '../store/reg/actions';
import { bindActionCreators } from 'redux';

class RegContainer extends Component {
    render() {
        return (
                <Reg 
                        email={this.props.email} 
                        password={this.props.password} 
                        repeatPassword={this.props.repeatPassword}
                        setEmailText={this.props.setEmailText} 
                        setPasswordText={this.props.setPasswordText} 
                        setRepeatPasswordText={this.props.setRepeatPasswordText}
                />
        );
    }
}

const mapStateToProps = state => {
    return {
        email: state.reg.email,
        password: state.reg.password,
        repeatPassword: state.reg.repeatPassword
    };
};

const mapDispatchProps = dispatch => { 
    return {
        setEmailText: bindActionCreators(setEmailText, dispatch),
        setPasswordText: bindActionCreators(setPasswordText, dispatch),
        setRepeatPasswordText: bindActionCreators(setRepeatPasswordText, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchProps)(RegContainer);