import React, { Component } from 'react';
import SubHeader from './subHeader/subHeader'
import MainHeader from './mainHeader/mainHeader'
import './header.scss'

const Header = (props) => (
    <div>
        <SubHeader />
        <MainHeader />
    </div>
);

export default Header;