import React, { Component } from 'react';
import SubHeader from './subHeader/subHeader'
import MainHeader from './mainHeader/mainHeader'
import './header.scss'

const Header = (props) => (
    <div className='header-wrapper'>
        <SubHeader changeCurrency={props.changeCurrency} changeLanguage={props.changeLanguage}/>
        <MainHeader navigationMenuChange={props.navigationMenuChange} />
    </div>
);

export default Header;