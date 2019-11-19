import React, { Component } from 'react';
import Posts from './Posts';
import Users from './Users';
import HeaderNew from './HeaderNew';

export default function Feed() {
    return (
        <div>
            <HeaderNew />
            <div className="container feed">
                <Posts />
                <Users />
            </div>
        </div>
    );
}