import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Links from './Links';
import { userStatus } from '../../userStatus';

export default class HeaderLogIn extends Component {
    render() {

        const links = [
            {
                name: "Лента",
                to: '/tape',
                id: 1
            }, 
            {
                name: "Профиль",
                to: '/profile',
                id: 2
            }, 
            {
                name: "Выйти",
                to: '/',
                click: function() {
                    userStatus[0] = {userStatus: false};
                    Array.from(document.getElementsByClassName("clear_input")).forEach((item) => {
                        item.value = ''; 
                    });
                    console.log('userStatus - ', userStatus[0])  
                },
                id: 3
            }
        ]; 

        return (
            <div>
                <header> 
                    <div className="container h-flex">
                        <Link to='/tape' className="logo">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png" alt="logo"></img>
                        </Link>
                        <nav className="links">
                            <Links links={links}/>
                        </nav>
                    </div>
                </header>
            </div>
        ); 
    }
}