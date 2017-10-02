import React, { Component } from 'react';
import { catalogTags } from '../../../configuration/homePageMenu'

export default class CatalogTagMenu extends Component {
    constructor(props) {
        super(props);
        this.state ={
            chosenTag: catalogTags[0]
        }
    }
    handleClick=(event)=>{
        this.setState({chosenTag: event.target.innerText.toLowerCase()})
    }
    render() {
        return (
            <div className='catalog-tag-menu-wrapper'>
                <ul className='catalog-tag-menu-list'>
                    {catalogTags.map((tag, i) => {
                        return (
                        <li key={i} className={this.state.chosenTag === tag?'catalog-tag-menu-item chosen':'catalog-tag-menu-item'} 
                            ><div onClick={this.handleClick}>{tag}</div></li>
                    )})}
                </ul>
            </div>
        )
    }
}