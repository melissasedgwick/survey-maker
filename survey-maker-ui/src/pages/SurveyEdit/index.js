import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { fetchSurvey, editSurvey } from '../../redux/actions';

export class SurveyEdit extends React.Component {
  componentDidMount() {
    this.props.fetchSurvey(this.props.match.params.id);
  }

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
    this.props.editSurvey(this.props.match.params.id, formValues);
  }

  render() {
    return (
      <div>
        <h2>Edit Survey</h2>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field name="name" component={this.renderInput} label="Name:"/>
          <button>Submit Changes</button>
        </form>
      </div>
    );
  };
};

const mapStateToProps = (state, ownProps) => {
  return {
    initialValues: state.surveys[ownProps.match.params.id]
  };
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.name) { errors.name = 'Please enter a new name for your survey' };

  return errors;
};

const formWrapped = reduxForm({
  form: 'surveyEdit',
  validate
})(SurveyEdit);

export default connect(mapStateToProps, { fetchSurvey, editSurvey })(formWrapped);
