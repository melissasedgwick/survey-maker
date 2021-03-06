import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createUser } from '../../redux/actions';
import { renderInput, renderPasswordInput } from '../../helpers/form';

export class UserCreate extends React.Component {
  onSubmit = (formValues) => {
    this.props.createUser(formValues);
  };

  render() {
    return (
      <div>
        <h2>Create an account:</h2>
          <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
            <Field name="username" component={renderInput} label="Username:"/>
            <Field name="password" component={renderPasswordInput} label="Password:"/>
            <button className="ui button primary">Submit</button>
          </form>
      </div>
    );
  };
};

const validate = (formValues) => {
  const errors = {};
  if (!formValues.username) { errors.username = 'Please enter a username' };
  if (!formValues.password) { errors.password = 'Please enter a password' };

  return errors;
};

const formWrapped = reduxForm({
  form: 'userCreate',
  validate
})(UserCreate);

export default connect(null, { createUser })(formWrapped);
