import { put, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import { SAGA_TEST } from '../../constants';
import {} from './actions';


function* exampleSaga(action) {
	try {
		// slow down request to simulate server communication
		yield delay(0);
		console.log('Saga fired!');

		// yield put(YOUR_ACTION_HERE);
	} catch (e) {
		// yield put(YOUR_ACTION_HERE);
	}
}

function* PlaceholderSaga() {
	yield takeLatest(SAGA_TEST, exampleSaga);
}

export default PlaceholderSaga;
