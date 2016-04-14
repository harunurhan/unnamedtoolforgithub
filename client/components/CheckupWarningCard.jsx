import React, { Component, PropTypes } from 'react';

import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';

const propTypes = {
  // TODO: should this be spreaded? spread if yes
  warning: PropTypes.object.isRequired,
};

class CheckupWarningCard extends Component {
  // TODO: set CardReader.avatar to the error icon see: http://www.material-ui.com/#/components/font-icon
  // TODO: set error icon color according to this.props.warning.severity
  render() {
    return (
      <Card>
        <CardHeader
          title={this.props.warning.description}
          actAsExpander
          showExpandableButton
        />
        <CardText expandable>
          {this.props.warning.suggestion}
        </CardText>
        <CardActions expandable>
          <FlatButton
            label="See Guide"
            linkButton
            href={this.props.warning.guide_link}
          />
        </CardActions>
      </Card>
    );
  }
}

CheckupWarningCard.propTypes = propTypes;

export default CheckupWarningCard;
