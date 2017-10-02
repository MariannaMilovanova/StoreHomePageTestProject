import React, {Component} from 'react';
import {Icon, Input} from 'semantic-ui-react';
import searchIcon from '../../../../../images/search.png'

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state={
            open:false
        }
    }
    handleClick =() => {
        this.setState({open:!this.state.open})
    }    

    render() {
        return (
            <div className="search-wrapper">
                <div className="search-icon">
                    <img src={searchIcon} onClick={this.handleClick}/>
                </div>
                {(this.state.open) &&
                    <div className="search-block">
                        <div className="search-input">
                            <Input
                                size="small"
                                placeholder="Find product"
                            />
                        </div>
                    <div className='close-icon' onClick={this.handleClick}>
                        <Icon name="close" size="small" color="grey"/>
                    </div>
                </div>}
            </div>
        );
    }
}