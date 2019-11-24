import React, { Component } from 'react';
import Posts from './Posts';
import Users from './Users';
import HeaderLogIn from '../Headers/HeaderLogIn';

export default function Feed() {
    return (
        <div>
            <HeaderLogIn />
            <div className="container feed">
                <Posts />
                <Users />
            </div>
        </div>
    );
}