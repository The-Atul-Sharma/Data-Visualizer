import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Button from '@material-ui/core/Button';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Button variant="raised" color="primary">
					Dashboard
    			</Button>
			</div>
		);
	}
}

export default App;
