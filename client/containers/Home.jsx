import React, { Component, PropTypes } from 'react';
import { connect, Provider } from 'react-redux';
<<<<<<< HEAD
import merge from 'lodash/merge';
// FIXME: use different way of es6 import to make below code single line
import * as formActions from '../actions/form';
import * as checkupActions from '../actions/checkup';
=======
// FIXME: use different way of es6 import to make below code single line
import formAction from '../actions/form';
import checkupAction from '../actions/checkup';

>>>>>>> d5a53951a92cb18e518772372753fddbc5f683b4
// Components FIXME: use different way of es6 import to make below code single line
import Form from '../components/Form';
import TextInput from '../components/TextInput';
import SubmitButton from '../components/SubmitButton';
<<<<<<< HEAD
import Checkup from '../components/Checkup';
=======
>>>>>>> d5a53951a92cb18e518772372753fddbc5f683b4

const propTypes = {
  store: PropTypes.object.isRequired,
};

<<<<<<< HEAD
// TODO: for 2nd param: add checkup actions too
const SmartForm = connect(state => state.form, merge({}, formActions, checkupActions))(Form);
const SmartCheckup = connect(state => state.checkup, checkupActions)(Checkup);

// TODO: remove <div> in <Provider> when it has single child!
=======
// TODO: remove (added for test purpose)
const log = data => console.log(data);

>>>>>>> d5a53951a92cb18e518772372753fddbc5f683b4
class Home extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
<<<<<<< HEAD
        <div>
          <SmartForm >
            <TextInput
              name="owner"
              validate={['required']}
              placeholder="github-username"
              label="Github Username"
            />
            <TextInput
              name="repo"
              validate={['required']}
              placeholder="github-repository"
              label="Github Repository"
            />
            <SubmitButton
              label="Checkup"
            />
          </SmartForm>
          <SmartCheckup />
        </div>
=======
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
>>>>>>> d5a53951a92cb18e518772372753fddbc5f683b4
      </Provider>
    );
  }
}

Home.propTypes = propTypes;

<<<<<<< HEAD

export default Home;
=======
// TODO for 1st param: define better mapStateToProps function.
export default connect(state => state, {
  formAction,
  checkupAction,
})(Home);
>>>>>>> d5a53951a92cb18e518772372753fddbc5f683b4
