import React, { Component } from 'react';
import Papa from 'papaparse';
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import FileReader from '../../Components/FileReader/FileReader';

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
            fileName: '',
            fileData: null,
        };
    }

    //Open dashboard drawer
    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    //Close dashboard drawer
    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    handleFileReader = file => {
        // Parse local CSV file

        let result = null;

        Papa.parse(file, {
            complete: res => {
                result = res.data;
                this.setState({
                    fileName: file.name,
                    fileData: result,
                });
                console.log(result);
            },
        });
    };

    render() {
        return (
            <div>
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
                <FileReader
                    fileName={this.state.fileName}
                    handleFileReader={this.handleFileReader}
                />
            </div>
        );
    }
}

export default Dashboard;
