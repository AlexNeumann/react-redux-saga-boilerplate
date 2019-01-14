import {
	GREETING_CHANGE,
} from '../../constants';

const initialState = {
	greeting: 'Hello World!',
};

export default function PlaceholderReducer(state = initialState, action) {
	switch (action.type) {
	case GREETING_CHANGE:
		return {
			...state,
			greeting: 'A new greeting!',
		};
	default:
		return state;
	}
}
