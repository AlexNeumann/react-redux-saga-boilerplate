import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
	rootReducer,
	applyMiddleware(sagaMiddleware),
);

// Run rootSaga
sagaMiddleware.run(rootSaga);
