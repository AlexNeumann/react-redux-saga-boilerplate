import React, { Component } from 'react';
import './App.css';


class PlaceholderPage extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<div>Rendering the PlaceholderPage</div>
					<div>Greeting: {this.props.greeting}</div>
					<div>
						<button onClick={this.props.dispatchChangeGreeting}>Change Greeting</button>
						<button onClick={this.props.dispatchSagaTest}>Test Saga (output in console)</button>
					</div>
				</header>
			</div>
		);
	}
}

export default PlaceholderPage;
