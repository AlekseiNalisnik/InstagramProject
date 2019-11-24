import React, { Component } from 'react';
import { connect } from 'react-redux';
import Reg from './Reg';
import { 
    setEmailText, 
    setPasswordText, 
    setNameText,
    setFullNameText
} from '../../store/Reg/actions';
import { bindActionCreators } from 'redux';

class RegContainer extends Component {
    render() {
        return (
            <Reg 
                email={this.props.email} 
                password={this.props.password} 
                name={this.props.name}
                fullName={this.props.fullName}
                setEmailText={this.props.setEmailText} 
                setPasswordText={this.props.setPasswordText} 
                setNameText={this.props.setNameText}
                setFullNameText={this.props.setFullNameText}
            />
        );
    }
}

const mapStateToProps = state => {
    return {
        email: state.reg.email,
        password: state.reg.password,
        name: state.reg.name,
        fullName: state.reg.fullName
    };
};

const mapDispatchProps = dispatch => { 
    return {
        setEmailText: bindActionCreators(setEmailText, dispatch),
        setPasswordText: bindActionCreators(setPasswordText, dispatch),
        setNameText: bindActionCreators(setNameText, dispatch),
        setFullNameText: bindActionCreators(setFullNameText, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchProps)(RegContainer);