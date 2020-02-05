import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
});

const CircleButton = props => {
  const { classes, onClick } = props;
  return (
    <Button
      onClick={onClick}
      size="small"
      variant="contained"
      color="primary"
      className={classes.button}
      // style={{
      //   borderRadius: "60px",
      //   color: "white",
      //   backgroundColor: "3f51b5"
      // }}
    >
      <i className="far fa-grin-squint-tears" />
    </Button>
  );
};

CircleButton.propTypes = {
  classes: PropTypes.object,
  onClick: PropTypes.func
};

export default withStyles(styles)(CircleButton);
