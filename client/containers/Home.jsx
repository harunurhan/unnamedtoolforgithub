import React, { Component, PropTypes } from 'react';
import { connect, Provider } from 'react-redux';
// FIXME: use different way of es6 import to make below code single line
import formAction from '../actions/form';
import checkupAction from '../actions/checkup';

// Components FIXME: use different way of es6 import to make below code single line
import Form from '../components/Form';
import TextInput from '../components/TextInput';
import SubmitButton from '../components/SubmitButton';

const propTypes = {
  store: PropTypes.object.isRequired,
};

// TODO: remove (added for test purpose)
const log = data => console.log(data);

class Home extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <Form onSubmit={log}>
          <TextInput
            name="repoName"
            validate={['required', 'repoName']}
            placeholder="github-username/repo-name"
            label="Repo name"
          />
          <TextInput
            name="keywords"
            validate={[]}
            placeholder="keyword1, keyword2, keyword3"
            label="Keywords"
          />
          <SubmitButton
            label="Checkup"
          />
        </Form>
      </Provider>
    );
  }
}

Home.propTypes = propTypes;

// TODO for 1st param: define better mapStateToProps function.
export default connect(state => state, {
  formAction,
  checkupAction,
})(Home);
