import React, { Component } from 'react';
import { connect } from 'react-redux';
import Auth from './Auth';
import { setEmailText, setPasswordText } from '../../store/Auth/Actions';
import { bindActionCreators } from 'redux';

class AuthContainer extends Component {
    render() {
        return (
            <Auth 
                email={this.props.email} 
                password={this.props.password} 
                setEmailText={this.props.setEmailText} 
                setPasswordText={this.props.setPasswordText} 
            />
        );
    }
}

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password
    };
};

const mapDispatchProps = dispatch => { 
    return {
        setEmailText: bindActionCreators(setEmailText, dispatch),
        setPasswordText: bindActionCreators(setPasswordText, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchProps)(AuthContainer);