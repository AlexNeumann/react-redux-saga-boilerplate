import {
	PLACEHOLDER_ACTION,
	GREETING_CHANGE,
	SAGA_TEST,
} from '../../constants';

export const actionPlaceholder = () => ({
	type: PLACEHOLDER_ACTION,
});

export const actionChangeGreeting = () => ({
	type: GREETING_CHANGE,
});

export const actionSagaTest = () => ({
	type: SAGA_TEST,
});
