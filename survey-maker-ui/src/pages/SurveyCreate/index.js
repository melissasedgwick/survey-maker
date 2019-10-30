import React from 'react';
import { connect } from 'react-redux';
import { createSurvey } from '../../redux/actions';
import SurveyForm from '../../components/SurveyForm';

export class SurveyCreate extends React.Component {
  onSubmit = (formValues) => {
    this.props.createSurvey(formValues);
  }

  render() {
    return (
      <div>
        <h2>Create a new survey!</h2>
        <SurveyForm onSubmit={this.onSubmit} />
      </div>
    );
  };
};

export default connect(null, { createSurvey })(SurveyCreate);
