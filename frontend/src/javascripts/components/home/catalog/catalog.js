import React, { Component } from 'react';
import CatalogTagMenu from './catalogTagMenu'
import CatalogList from './catalogList'
import { catalog } from '../../../configuration/catalogObject'
import './catalog.scss'

let j = 0
export default class Catalog extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount(){
        this.props.getCatalogItems()
    }
    render() {
        return (
            <div className='catalog-body-wrapper'>
                <div className='catalog-header'>
                    <span>Catalog</span>
                </div>
                <CatalogTagMenu getCatalogItemsByTag={this.props.getCatalogItemsByTag} />
                <CatalogList goToProductDescription={this.props.goToProductDescription}
                    getCatalogItems={this.props.getCatalogItems}
                    currentTag={this.props.currentTag}
                    catalog={this.props.catalog}
                    loadMoreCatalogItems={this.props.loadMoreCatalogItems}
                    />
            </div>
        )
    }
}
