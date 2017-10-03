export const getCatalogItemsByTag = (tag) => {
    return {
        type: 'GET_CATALOG_ITEMS_BY_TAG',
        tag: tag
    };
};

export const navigationMenuChange = (menuItem) => {
    return {
        type: 'NAVIGATION_MENU_CHANGE',
        menuItem: menuItem
    };
};

export const changeCurrency = (currency) => {
    return {
        type: 'CHANGE_CURRENCY',
        currency: currency
    };
};

export const changeLanguage = (language) => {
    return {
        type: 'CHANGE_LANGUAGE',
        language: language
    };
};

export const getCatalogItems = () => {
    return {
        type: 'GET_CATALOG_ITEMS'
    };
};

export const goToProductDescription = (productId) => {
    return {
        type: 'GO_TO_PRODUCT_DESCRIPTION',
        productId: productId
    };
};

export const loadMoreCatalogItems = () => {
    return {
        type: 'LOAD_MORE_CATALOG_ITEMS'
    };
};

export const subscribeToNews = (email) => {
    return {
        type: 'SUBSCRIBE_TO_NEWS',
        email: email
    };
};





