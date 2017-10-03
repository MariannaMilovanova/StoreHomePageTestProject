import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './header/header'
import Catalog from './catalog/catalog'
import Subscription from './subscription/subscription'
import Footer from './footer/footer'
import { getCatalogItemsByTag, navigationMenuChange, changeCurrency, changeLanguage, 
    goToProductDescription, loadMoreCatalogItems, subscribeToNews, getCatalogItems } from './actions'
import './homePage.scss'

class HomePageContainer extends Component { 
    render() {   
        return (
            <div className='home-page-wrapper'>
                <Header navigationMenuChange={this.props.navigationMenuChange}
                        changeCurrency={this.props.changeCurrency}
                        changeLanguage={this.props.changeLanguage}
                />
                <Catalog getCatalogItemsByTag={this.props.getCatalogItemsByTag} 
                         goToProductDescription={this.props.goToProductDescription}
                         loadMoreCatalogItems={this.props.loadMoreCatalogItems}
                         currentTag={this.props.currentTag}
                         getCatalogItems={this.props.getCatalogItems}
                         catalog={this.props.catalog}
                />
                <Subscription subscribeToNews={this.props.subscribeToNews}/>
                <Footer navigationMenuChange={this.props.navigationMenuChange} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return({
        currentTag: state.homePageStore.currentTag,
        currentBodyContent: state.homePageStore.currentBodyContent,
        catalog: state.homePageStore.catalog
    })
}
const mapDispatchToProps = {
    getCatalogItemsByTag: getCatalogItemsByTag,
    navigationMenuChange: navigationMenuChange,
    changeCurrency: changeCurrency,
    changeLanguage: changeLanguage,
    goToProductDescription: goToProductDescription, 
    loadMoreCatalogItems: loadMoreCatalogItems,
    subscribeToNews: subscribeToNews,
    getCatalogItems: getCatalogItems
}

const HomePage = connect(mapStateToProps, mapDispatchToProps)(HomePageContainer);

export default HomePage