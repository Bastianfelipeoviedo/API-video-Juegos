import {createStore, applyMiddleware, compose} from 'redux';
import gamesReducer from '../reducer/reducer';
import thunk from 'redux-thunk';

const store = createStore(gamesReducer, compose(applyMiddleware(thunk)));

export default store;
