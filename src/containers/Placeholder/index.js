import React, { Component } from 'react';
import { connect } from 'react-redux';

import { actionChangeGreeting, actionSagaTest } from './actions';

import PlaceholderPage from './PlaceholderPage';

class Placeholder extends Component {
	render() {
		return (
			<PlaceholderPage
				greeting={this.props.greeting}
				dispatchChangeGreeting={this.props.dispatchChangeGreeting}
				dispatchSagaTest={this.props.dispatchSagaTest}
			/>
		);
	}
}

const mapStateToProps = (state) => ({
	greeting: state.PlaceholderReducer.greeting,
});

const mapDispatchToProps = (dispatch) => ({
	dispatchChangeGreeting: () => dispatch(actionChangeGreeting()),
	dispatchSagaTest: () => dispatch(actionSagaTest()),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Placeholder);
