import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { renderInput } from '../../helpers/form';

export class SurveyForm extends React.Component {
  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
        <Field name="name" component={renderInput} label="Name:"/>
        <button className="ui button primary">Submit</button>
      </form>
    );
  };
};

const validate = (formValues) => {
  const errors = {};

  if (!formValues.name) { errors.name = 'Please enter a name for your survey' };

  return errors;
};

export default reduxForm({
  form: 'Form',
  validate
})(SurveyForm);
