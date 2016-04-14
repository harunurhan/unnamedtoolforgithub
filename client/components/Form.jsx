// Reusable Component!

import React, { Component, PropTypes } from 'react';
import without from 'lodash/without';
// TODO: use lodash.merge instead, for consistency in the codebase.
import assign from 'lodash/assign';

const propTypes = {
  children: PropTypes.node,
  values: PropTypes.object,
  update: PropTypes.func,
  reset: PropTypes.func,
  onSubmit: PropTypes.func,
};
const defaultProps = {
  onSubmit: () => undefined,
  values: {},
};
const childContextTypes = {
  update: PropTypes.func,
  reset: PropTypes.func,
  submit: PropTypes.func,
  values: PropTypes.object,
  registerValidation: PropTypes.func,
  isFormValid: PropTypes.func,
};


class Form extends Component {
  constructor(props) {
    super(props);

    this.validations = [];
    this.registerValidation = this.registerValidation.bind(this);
    this.isFormValid = this.isFormValid.bind(this);
    this.submit = this.submit.bind(this);
  }

  getChildContext() {
    return {
      update: this.props.update,
      reset: this.props.reset,
      submit: this.submit,
      values: this.props.values,
      registerValidation: this.registerValidation,
      isFormValid: this.isFormValid,
    };
  }

  registerValidation(isValidFunc) {
    this.validations = [...this.validations, isValidFunc];
    return this.removeValidation.bind(null, isValidFunc);
  }

  removeValidation(ref) {
    this.validations = without(this.validations, ref);
  }

  isFormValid(showErrors) {
    return this.validations.reduce((memo, isValidFunc) =>
    isValidFunc(showErrors) && memo, true);
  }

  submit() {
    if (this.isFormValid(true)) {
      this.props.onSubmit(assign({}, this.props.values));
      this.props.reset();
    }
  }

  render() {
    return (
      <form>
        {this.props.children}
      </form>
    );
  }
}

Form.propTypes = propTypes;
Form.defaultProps = defaultProps;
Form.childContextTypes = childContextTypes;

export default Form;
