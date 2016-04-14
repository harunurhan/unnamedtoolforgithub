<<<<<<< HEAD
import React, { Component, PropTypes } from 'react';

import CheckupWarningCard from './CheckupWarningCard';

const propTypes = {
  // TODO: spread checkup object into its elements
  checkup: PropTypes.object,
};

const defaultProps = {
  checkup: { warnings: [] },
};

/**
 * Checkup Component
 * This component show the result of a checkup!
 */
// FIXME: show other stuff than warnings
=======
// FIXME: would it be better if the component was designed in a more reusable manner.
import React, { Component, PropTypes } from 'react';

const propTypes = {
  // TODO: spread checkup object into its elements
  checkup: PropTypes.object.isRequired,
};

// TODO: define structure of the component
>>>>>>> d5a53951a92cb18e518772372753fddbc5f683b4
class Checkup extends Component {
  render() {
    return (
      <div>
<<<<<<< HEAD
        {this.props.checkup.warnings.length ?
          this.props.checkup.warnings.map(warning =>
            <CheckupWarningCard
              warning={warning}
            />)
          : null}
=======
        Checkup
>>>>>>> d5a53951a92cb18e518772372753fddbc5f683b4
      </div>
    );
  }
}

Checkup.propTypes = propTypes;
<<<<<<< HEAD
Checkup.defaultProps = defaultProps;
=======
>>>>>>> d5a53951a92cb18e518772372753fddbc5f683b4
export default Checkup;
