import React, { Component } from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {
    mailFolderListItems,
    otherMailFolderListItems,
} from './SidebarListData';

import './Sidebar.css';
import { drawerWidth } from '../../Constants/Styles';

const styles = theme => ({
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing.unit * 7,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing.unit * 9,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
    },
});

class Sidebar extends Component {
    //Close dashboard drawer
    handleDrawerClose = () => {
        this.props.handleDrawerClose();
    };

    render() {
        const { classes, theme } = this.props;
        return (
            <div>
                <Drawer
                    variant="permanent"
                    classes={{
                        paper: classNames(
                            classes.drawerPaper,
                            'drawer',
                            !this.props.open && classes.drawerPaperClose
                        ),
                    }}
                    open={this.props.open}
                >
                    <div
                        className={classNames(
                            classes.toolbar,
                            'drawer-close-btn'
                        )}
                    >
                        <IconButton onClick={this.handleDrawerClose}>
                            {theme.direction === 'rtl' ? (
                                <ChevronRightIcon />
                            ) : (
                                <ChevronLeftIcon />
                            )}
                        </IconButton>
                    </div>
                    <List>{mailFolderListItems}</List>
                </Drawer>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(Sidebar);
