import { combineReducers } from 'redux';

import PlaceholderReducer from './containers/Placeholder/reducer';

const rootReducer = combineReducers({
	PlaceholderReducer,
});

export default rootReducer;
