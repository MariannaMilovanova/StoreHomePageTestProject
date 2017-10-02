import React, { Component } from 'react';
import tick from '../../../../images/subscribe_tick.png'
import './subscription.scss'

export default class Subscription extends Component {
    render() {
        return (
            <div className='subscription-wrapper'>
                <div className='subscription-container'>
                    <div className='subscription-content'>
                        <div className='subscription-header'>SUBSCRIBE</div>
                        <div className='subscription-text'>Stay updated on news</div>
                        <div  className='subscription-input-wrapper'>
                            <input className='subscription-input' type="text" placeholder='YOUR EMAIL ADDRESS'/>
                            <img className='subscription-tick' src={tick} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}