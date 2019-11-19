import React from "react";
import User from './User';
import Palette from './Palette';
import HeaderNew from './HeaderNew';
// import { getUsersInfo } from '../service/service';

const Profile = () => {

    // getUsersInfo()
    //     .then(res => console.log('RESPONSE - ', res));
    const name = JSON.parse(localStorage.getItem('usersInfo.name'));

    return (
        <div>
            <HeaderNew />
            <div className="container profile">
                <User 
                    src="https://jooinn.com/images/man-19.jpg" 
                    alt="man" 
                    name={name} 
                />
                <Palette />
            </div>
        </div>
    );
}

export default Profile;