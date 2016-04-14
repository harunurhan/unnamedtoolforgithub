import React, { Component, PropTypes } from 'react';
import RaisedButton from 'material-ui/lib/raised-button';

const propTypes = {
  label: PropTypes.string,
};
const defaultProps = {
  label: 'Submit',
};
const contextTypes = {
  isFormValid: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
};

class SubmitButton extends Component {
  render() {
    return (
        <RaisedButton
          primary
          disabled={!this.context.isFormValid()}
          label={this.props.label}
          onTouchTap={this.context.submit}
        />
    );
  }
}

SubmitButton.propTypes = propTypes;
SubmitButton.defaultProps = defaultProps;
SubmitButton.contextTypes = contextTypes;

export default SubmitButton;
