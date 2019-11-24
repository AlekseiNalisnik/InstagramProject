import React from "react";
import User from '../Posts/User';
import Palette from './Palette';
import HeaderLogIn from '../Headers/HeaderLogIn';

const Profile = (props) => {

    const mainName = JSON.parse(localStorage.getItem('usersInfo.name'));

    return (
        <div>
            <HeaderLogIn />
            {Boolean(props.location.state) ? (
                <div className="container profile">
                    <User 
                        src={props.location.state.linkProps.src}
                        alt={props.location.state.linkProps.alt} 
                        name={props.location.state.linkProps.name} 
                    />
                    <Palette
                        photo={props.location.state.linkProps.src}
                        altname={props.location.state.linkProps.alt} 
                        name={props.location.state.linkProps.name}
                    />
                </div> )
                : (
                <div className="container profile">
                <User 
                    src="https://jooinn.com/images/man-19.jpg" 
                    alt="man" 
                    name={mainName} 
                />
                <Palette
                    photo="https://jooinn.com/images/man-19.jpg" 
                    altname="man" 
                    name={mainName}
                />
                </div> )
            }
        </div>
    );
}

export default Profile;