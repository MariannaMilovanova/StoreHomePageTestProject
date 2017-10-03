import React, { Component } from 'react';
import tick from '../../../../images/subscribe_tick.png'
import './subscription.scss'

export default class Subscription extends Component {
    handleClick=()=>{
        this.props.subscribeToNews(this.refs.subscribe.value)
    }
    render() {
        return (
            <div className='subscription-wrapper'>
                <div className='subscription-container'>
                    <div className='subscription-content'>
                        <div className='subscription-header'>SUBSCRIBE</div>
                        <div className='subscription-text'>Stay updated on news</div>
                        <div  className='subscription-input-wrapper'>
                            <input ref='subscribe' className='subscription-input' type="text" placeholder='YOUR EMAIL ADDRESS'/>
                            <img className='subscription-tick' src={tick} onClick={this.handleClick}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}