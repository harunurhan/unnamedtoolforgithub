// Reusable Component!

import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/lib/text-field';
import * as validators from '../utils/validators';

const propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  validate: PropTypes.arrayOf(PropTypes.string),
};
const contextTypes = {
  update: PropTypes.func,
  values: PropTypes.object,
  registerValidation: PropTypes.func.isRequired,
};
const defaultProps = {
  validate: [],
};

class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = { errors: [] };
    this.onChange = this.onChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.updateValue = this.updateValue.bind(this);
    this.isValid = this.isValid.bind(this);
  }

  componentWillMount() {
    this.removeValidationFromContext = this.context.registerValidation(show =>
        this.isValid(show));
  }

  componentWillUnmount() {
    this.removeValidationFromContext();
  }

  onChange(event) {
    this.updateValue(event.target.value);
  }

  onBlur() {
    this.isValid(true);
  }

  isValid(showErrors) {
    const errors = this.props.validate
        .reduce((memo, currentName) =>
            memo.concat(validators[currentName](
                this.context.values[this.props.name]
            )), []);

    if (showErrors) {
      this.setState({
        errors,
      });
    }
    return !errors.length;
  }

  updateValue(value) {
    this.context.update(this.props.name, value);

    if (this.state.errors.length) {
      setTimeout(() => this.isValid(true), 0);
    }
  }

  render() {
    return (
      <div>
        <TextField
          hintText={this.props.placeholder}
          floatingLabelText={this.props.label}
          value={this.context.values[this.props.name]}
          onChange={this.onChange}
          onBlur={this.onBlur}
          errorText={this.state.errors.length ? (
            <div>
              {this.state.errors.map((error, i) => <div key={i}>{error}</div>)}
            </div>
          ) : null}
        />
      </div>
    );
  }
}

TextInput.propTypes = propTypes;
TextInput.contextTypes = contextTypes;
TextInput.defaultProps = defaultProps;

export default TextInput;
