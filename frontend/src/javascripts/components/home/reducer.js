import { catalog } from '../../configuration/catalogObject'

let initialState = {
    currentTag:'all',
    currentBodyContent: 'catalog',
    currency: 'usd',
    language: 'en'
}
const homePageStore = (state = initialState, action) => {

     switch (action.type) {
        case 'GET_CATALOG_ITEMS': {
            let catalogList = [];
            for (let i=0; i<8; i++){
                catalogList[i]= catalog[i]
            }
            return {...state, ...{catalog: catalogList}}
        }
        case 'LOAD_MORE_CATALOG_ITEMS': {
            let catalogList = [...state.catalog];
            let newCatalog = [...catalogList];
            for ( let i = catalogList.length; i < catalogList.length+8; i++ ){
                newCatalog[i]= catalog[i]
            }
            return {...state, ...{catalog: newCatalog}}
        }
        case 'GET_CATALOG_ITEMS_BY_TAG':
            return {...state, ...{currentTag: action.tag}}
            
        case 'NAVIGATION_MENU_CHANGE':
            return {...state, ...{currentBodyContent: action.menuItem}}

        case 'CHANGE_CURRENCY':
            return {...state, ...{currency: action.currency}}

        case 'CHANGE_LANGUAGE':
            return {...state, ...{language: action.language}}

        case 'GO_TO_PRODUCT_DESCRIPTION':
            return {...state, ...{product: action.productId}}

        default:
            return state
    }
}

export default homePageStore