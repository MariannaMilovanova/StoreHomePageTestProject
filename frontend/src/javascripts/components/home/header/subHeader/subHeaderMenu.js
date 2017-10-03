import React, { Component } from 'react';
import { Link } from 'react-router';

const SubHeaderMenu = (props) => (
    <ul className='sub-header-menu-list'>
        <Link to={'/delivery'}><li className='sub-header-menu-item'>DELIVERY</li></Link>
        <Link to={'/faq'}><li className='sub-header-menu-item'>FAQ</li></Link>
        <Link to={'/help'}><li className='sub-header-menu-item'>HELP</li></Link>
    </ul>
)

export default SubHeaderMenu