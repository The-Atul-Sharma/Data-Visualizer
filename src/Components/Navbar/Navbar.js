import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import Sidebar from "../Sidebar/Sidebar";
import { drawerWidth } from "../../Constants/Styles";
import "./Navbar.css";

const styles = theme => ({
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`
    },
    "appBar-left": {
        marginLeft: drawerWidth
    },
    "appBar-right": {
        marginRight: drawerWidth
    }
});

class Navbar extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Sidebar />
                <AppBar position="absolute" className={classes.appBar}>
                    <Toolbar className="dashboard-navbar">
                        <Typography variant="title" color="inherit" noWrap>
                            Data Visualizer
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default withStyles(styles)(Navbar);
