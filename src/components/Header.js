import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <header> 
                <div className="container h-flex">
                    <a href="#" className="logo">
                        <img src="https://jooinn.com/images/man-19.jpg" alt="logo"></img>
                    </a>
                    <nav className="links">
                        <ul>
                            <li>
                                <a href="#" className="menu_links">Лента</a>
                            </li>
                            <li>
                                <a href="#" className="menu_links">Профиль</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}