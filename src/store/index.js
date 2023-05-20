import {createStore} from 'redux';
import { rootReducers } from './root-reducer';

const store = createStore(
    rootReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.
    __REDUX_DEVTOOlS_EXTENSION_()
);

export {store};