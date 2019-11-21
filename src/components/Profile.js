import React from "react";
import User from './User';
import Palette from './Palette';
import HeaderLogIn from './HeaderLogIn';

const Profile = () => {

    const name = JSON.parse(localStorage.getItem('usersInfo.name'));

    return (
        <div>
            <HeaderLogIn />
            <div className="container profile">
                <User 
                    src="https://jooinn.com/images/man-19.jpg" 
                    alt="man" 
                    name={name} 
                />
                <Palette 
                    photo="https://jooinn.com/images/man-19.jpg" 
                    altname="man" 
                    name={name}
                />
            </div>
        </div>
    );
}

export default Profile;