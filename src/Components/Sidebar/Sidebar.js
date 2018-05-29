import React, { Component } from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

import {
    mailFolderListItems,
    otherMailFolderListItems
} from "./SidebarListData";
import { drawerWidth } from "../../Constants/Styles";

const styles = theme => ({
    drawerPaper: {
        position: "relative",
        width: drawerWidth
    },
    toolbar: theme.mixins.toolbar,
    sidebarHeading: {
        minHeight: "45px !important"
    }
});

class Sidebar extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className="dashboard-sidebar">
                <Drawer
                    variant="permanent"
                    classes={{
                        paper: classes.drawerPaper
                    }}
                >
                    <div
                        className={classNames(
                            classes.toolbar,
                            classes.sidebarHeading
                        )}
                    />
                    <Divider />
                    <List>{mailFolderListItems}</List>
                    <Divider />
                    <List>{otherMailFolderListItems}</List>
                </Drawer>
            </div>
        );
    }
}

export default withStyles(styles)(Sidebar);
