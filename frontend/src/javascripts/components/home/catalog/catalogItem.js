import React, { Component } from 'react';

export default class CatalogItem extends Component {
    render() {
        return (
            <div className={`catalog-item-wrapper isNew-${this.props.item.new}`} >
                <div className='catalog-item-img'><img src={require(`../../../../images/${this.props.item.img}`)}/></div>
                <div className='catalog-item-title'
                    onClick={()=>this.props.goToProductDescription(this.props.item._id)}
                >{this.props.item.title}</div>
                
                {(this.props.item.oldPrice === this.props.item.newPrice) && <div className='catalog-item-price'>
                    {`${this.props.item.currency}${this.props.item.oldPrice}`}
                </div>}

                {(this.props.item.oldPrice != this.props.item.newPrice) && 
                    <div className='old-new-price-wrapper'>
                        <div className='old-price'>
                            {`${this.props.item.currency}${this.props.item.oldPrice}`}
                        </div>
                        <div className='new-price'>
                            {`${this.props.item.currency}${this.props.item.newPrice}`}
                        </div>
                    </div>
                }
            </div>
        )
    }
}