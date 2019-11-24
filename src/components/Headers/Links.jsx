import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Links extends Component {

    render() {
        const { links } = this.props;
        return (
            <ul>
                {links.map((item) => 
                    <li key={item.id}>
                        <Link onClick={item.click} to={item.to} className="links__menu">{item.name}</Link>
                    </li> 
                )}
            </ul>
        );
    }
}