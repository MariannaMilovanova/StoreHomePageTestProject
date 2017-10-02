import React, { Component } from 'react';

export default class SubHeaderMenu extends Component {
    render() {
        return (
            <ul className='sub-header-menu-list'>
                <li className='sub-header-menu-item'>DELIVERY</li>
                <li className='sub-header-menu-item'>FAQ</li>
                <li className='sub-header-menu-item'>HELP</li>
            </ul>
        )
    }
}