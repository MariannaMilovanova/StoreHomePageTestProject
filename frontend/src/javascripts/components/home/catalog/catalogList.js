import React, { Component } from 'react';
import CatalogItem from './catalogItem'
import { catalog } from '../../../configuration/catalog'

export default class CatalogList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='catalog-list-wrapper'>
                <div className='catalog-list'>
                    {catalog.map((item, i) => {
                        return (
                            <CatalogItem item={item} key={i} img={i+1}/>
                    )})}
                </div>
            </div>
        )
    }
}