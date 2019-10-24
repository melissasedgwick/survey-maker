import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createSurvey } from '../../redux/actions';

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

  onSubmit = (formValues) => {
    this.props.createSurvey(formValues);
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


const formWrapped = reduxForm({
  form: 'surveyCreate',
  validate
})(SurveyCreate);

export default connect(null, { createSurvey })(formWrapped);
