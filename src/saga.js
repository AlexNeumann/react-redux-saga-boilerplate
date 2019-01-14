import { all, fork } from 'redux-saga/effects';

import PlaceholderSaga from './containers/Placeholder/saga';

export default function* rootSaga() {
	yield all([
		fork(PlaceholderSaga),
	]);
}
