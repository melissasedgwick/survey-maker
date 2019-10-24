import React from 'react';
import { Field, reduxForm } from 'redux-form';

export class SurveyCreate extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div>
          {error}
        </div>
      );
    } else { return null };
  };

  renderInput = ({ input, label, meta }) => {
    return (
      <div>
        <label>{label}</label>
        <input {...input} />
        {this.renderError(meta)}
      </div>
    );
  }

  onSubmit(formValues) {
    console.log(formValues);
  }

  render() {
    return (
      <div>
        <h2>Create a new survey!</h2>
          <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <Field name="name" component={this.renderInput} label="Name:"/>
            <button>Submit</button>
          </form>
      </div>
    );
  };
};

const validate = (formValues) => {
  const errors = {};
  if (!formValues.name) { errors.name = 'Please enter a name for your survey' };

  return errors;
};


export default reduxForm({
  form: 'listCreate',
  validate
})(SurveyCreate);
