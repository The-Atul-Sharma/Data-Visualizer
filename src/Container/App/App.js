import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Button from '@material-ui/core/Button';
import Sidebar from '../../Components/Sidebar/Sidebar';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Sidebar />
			</div>
		);
	}
}

export default App;
