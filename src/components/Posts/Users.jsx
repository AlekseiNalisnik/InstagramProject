import React from 'react';
import User from './User';
import { data } from '../../../Data/data';

const Users = () => {

    const name = JSON.parse(localStorage.getItem('usersInfo.name'));

    return (
        <div className="right">
            <User 
                src="https://jooinn.com/images/man-19.jpg" 
                alt="man" 
                name={name}
            />
            <div className="users__block">
                {data.map(item => {
                const {name, photo, alt, id} = item;

                return (
                    <User 
                        key={id}
                        src={photo} 
                        alt={alt} 
                        name={name}
                        min 
                    />
                );
                } ) }
            </div>
        </div>
    )
}

export default Users;