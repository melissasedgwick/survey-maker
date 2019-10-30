import React from 'react';
import { connect } from 'react-redux';
import { fetchSurvey, editSurvey } from '../../redux/actions';
import SurveyForm from '../../components/SurveyForm';

export class SurveyEdit extends React.Component {
  componentDidMount() {
    this.props.fetchSurvey(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editSurvey(this.props.match.params.id, formValues);
  }

  render() {
    return (
      <div>
        <h2>Edit Survey</h2>
        <SurveyForm onSubmit={this.onSubmit} initialValues={this.props.survey} />
      </div>
    );
  };
};

const mapStateToProps = (state, ownProps) => {
  return {
    survey: state.surveys[ownProps.match.params.id]
  };
}

export default connect(mapStateToProps, { fetchSurvey, editSurvey })(SurveyEdit);
