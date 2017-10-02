import React, { Component } from 'react';
import CatalogTagMenu from './catalogTagMenu'
import CatalogList from './catalogList'
import './catalog.scss'

const Catalog  = (props) => (
    <div className='catalog-body-wrapper'>
        <div className='catalog-header'>
            <span>Catalog</span>
        </div>
        <CatalogTagMenu />
        <CatalogList />
        <div className='catalog-load-more-items'>LOAD MORE...</div>
    </div>
);


export default Catalog