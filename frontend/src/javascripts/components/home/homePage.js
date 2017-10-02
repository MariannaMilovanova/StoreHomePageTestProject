import React, { Component } from 'react';
import Header from './header/header'
import Catalog from './catalog/catalog'
import Subscription from './subscription/subscription'
import Footer from './footer/footer'
import './homePage.scss'

const HomePage = (props) => (
    <div className='home-page-wrapper'>
        <Header />
        <Catalog />
        <Subscription />
        <Footer />
    </div>
)

export default HomePage