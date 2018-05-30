import React, { Component } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';

class Dashboard extends Component {
    state = {
        open: false,
    };

    //Open dashboard drawer
    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    //Close dashboard drawer
    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    render() {
        return (
            <div>
                <Navbar
                    open={this.state.open}
                    handleDrawerOpen={this.handleDrawerOpen}
                />
                <Sidebar
                    open={this.state.open}
                    handleDrawerClose={this.handleDrawerClose}
                />
            </div>
        );
    }
}

export default Dashboard;
