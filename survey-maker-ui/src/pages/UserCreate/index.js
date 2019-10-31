import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createUser } from '../../redux/actions';

export class UserCreate extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    } else { return null };
  };

  renderInput = ({ input, label, meta }) => {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
        {this.renderError(meta)}
      </div>
    );
  }

  renderPasswordInput = ({ input, label, meta }) => {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} type="password" />
        {this.renderError(meta)}
      </div>
    );
  }

  onSubmit = (formValues) => {
    this.props.createUser(formValues);
  }

  render() {
    return (
      <div>
        <h2>Create an account:</h2>
          <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
            <Field name="username" component={this.renderInput} label="Username:"/>
            <Field name="password" component={this.renderPasswordInput} label="Password:"/>
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
