import React, { Component } from 'react';
import User from './User';

const Users = () => {
    return (
        <div className="right">
            <User 
                src="https://jooinn.com/images/man-19.jpg" 
                alt="man" 
                name="Scott"
                min 
            />
            <div className="users__block">
                <User 
                    src="https://jooinn.com/images/man-19.jpg" 
                    alt="man" 
                    name="Scott"
                    min 
                />
                 <User 
                    src="https://jooinn.com/images/man-19.jpg" 
                    alt="man" 
                    name="Scott"
                    min 
                />
                 <User 
                    src="https://jooinn.com/images/man-19.jpg" 
                    alt="man" 
                    name="Scott"
                    min 
                />
                 <User 
                    src="https://jooinn.com/images/man-19.jpg" 
                    alt="man" 
                    name="Scott"
                    min 
                />
            </div>
        </div>
    )
}

export default Users;