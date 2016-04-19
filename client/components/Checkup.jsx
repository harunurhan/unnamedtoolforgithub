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
class Checkup extends Component {
  render() {
    return (
      <div>
        {this.props.checkup.warnings.length ?
          this.props.checkup.warnings.map(warning =>
            <CheckupWarningCard
              warning={warning}
            />)
          : null}
      </div>
    );
  }
}

Checkup.propTypes = propTypes;
Checkup.defaultProps = defaultProps;
export default Checkup;
