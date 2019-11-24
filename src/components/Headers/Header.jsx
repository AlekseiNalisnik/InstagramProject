import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Links from './Links';

export default class Header extends Component {
    render() {

        const links = [
            {
                name: "Зарегистрироваться",
                to: '/registration',
                id: 1
            }, 
            {
                name: "Войти",
                to: '/',
                id: 2
            }
        ]; 

        return (
            <div>
                    <header> 
                        <div className="container h-flex">
                            <Link to='/' className="logo">
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