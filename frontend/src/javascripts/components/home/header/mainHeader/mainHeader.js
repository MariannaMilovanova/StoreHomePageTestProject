import React from 'react';
import NavigationMenu from './navigationMenu';
import Basket from './basket'
import Search from './search'
import logo from '../../../../../images/logo.png'
import './mainHeader.scss'


const MainHeader = (props) => (
    <div className='main-header-wrapper'>
        <div className='main-header-container'>
            <div className='logo'>
                <img src={logo}/>
            </div>
            <NavigationMenu />
            <Basket />
            <Search />
        </div>
    </div>
);

export default MainHeader;
