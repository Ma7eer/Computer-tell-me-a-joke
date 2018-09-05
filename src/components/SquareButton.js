import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  }
});

const SquareButton = (props) => {
  const { classes, onClick, buttonValue } = props;
  return (
    <Button onClick={onClick} variant="contained" color="primary" className={classes.button}>{buttonValue}</Button>
  );
}

SquareButton.propTypes = {
  classes: PropTypes.object,
  onClick: PropTypes.func,
  buttonValue: PropTypes.string
}


export default withStyles(styles)(SquareButton);