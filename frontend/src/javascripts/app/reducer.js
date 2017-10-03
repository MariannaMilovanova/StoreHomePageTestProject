import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux';
import homePageStore from '../components/home/reducer'

export default combineReducers({
    routing,
    homePageStore
});
