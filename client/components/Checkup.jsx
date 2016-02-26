// FIXME: would it be better if the component was designed in a more reusable manner.
import React, { Component, PropTypes } from 'react';

const propTypes = {
  // TODO: spread checkup object into its elements
  checkup: PropTypes.object.isRequired,
};

// TODO: define structure of the component
class Checkup extends Component {
  render() {
    return (
      <div>
        Checkup
      </div>
    );
  }
}

Checkup.propTypes = propTypes;
export default Checkup;
