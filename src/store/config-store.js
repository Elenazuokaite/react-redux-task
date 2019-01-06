import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import mainReducer from '../reducers/reducer';

const middlewares = composeWithDevTools(applyMiddleware(thunk));

const reducers = combineReducers({
    app: mainReducer,
    form: formReducer,
});

export default () => {
    const store = createStore(reducers, middlewares);
    return store;
};