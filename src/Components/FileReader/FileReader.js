import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import './FileReader.css';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});

class FileReader extends Component {
    // Read File
    handleFileReader = event => {
        this.props.handleFileReader(event.target.files[0]);
    };

    render() {
        const { classes } = this.props;
        return (
            <div className="filereader">
                <input
                    accept=".csv"
                    className={classes.input}
                    id="contained-button-file"
                    multiple
                    type="file"
                    onChange={this.handleFileReader}
                />
                <label htmlFor="contained-button-file">
                    <Button
                        variant="raised"
                        component="span"
                        className={classes.button}
                    >
                        Upload
                    </Button>
                </label>
                <span>{this.props.fileName}</span>
            </div>
        );
    }
}

FileReader.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FileReader);
