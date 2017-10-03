import React, { Component } from 'react';
import CatalogItem from './catalogItem';

let catalogList=[];
export default class CatalogList extends Component {
    constructor(props) {
        super(props);
    }

    handleClick=()=>{
        this.props.loadMoreCatalogItems()
    }

    render() {
        return (
            <div className='catalog-list-wrapper'>
                <div className='catalog-list'>
                    { this.props.catalog && (this.props.currentTag === 'all') && 
                        this.props.catalog.map((item, i) => {
                            return (
                                <CatalogItem item={item} key={i} goToProductDescription={this.props.goToProductDescription}/>
                            )
                        })}
                    { this.props.catalog && (this.props.currentTag !== 'all') &&
                           this.props.catalog.map((item, i) => {
                                if (this.props.currentTag === item.tag) {
                                    return (
                                        <CatalogItem item={item} key={i} goToProductDescription={this.props.goToProductDescription}/>
                                    )
                                }
                        })}
                </div>
                <div className='catalog-load-more-items'
                    onClick={this.handleClick}>LOAD MORE...</div>
            </div>
        )
    }
}