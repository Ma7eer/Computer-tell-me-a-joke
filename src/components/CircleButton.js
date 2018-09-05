import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  }
});

const CircleButton = (props) => {
  const { classes, onClick } = props;
  return (
    <Button onClick={onClick} size="small" variant="fab" color="primary" className={classes.button}>
    <i className="far fa-grin-squint-tears"></i>
  </Button>
  );
}

CircleButton.propTypes = {
  classes: PropTypes.object,
  onClick: PropTypes.func
}

export default withStyles(styles)(CircleButton);