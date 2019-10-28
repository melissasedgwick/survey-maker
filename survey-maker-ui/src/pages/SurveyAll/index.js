import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../redux/actions';
import './index.css'

export class SurveyAll extends React.Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    return this.props.surveys[0].map(survey => {
      return(
        <div key={survey.id}>
          <div>
            {survey.name}
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h2>All Surveys:</h2>
        <div id="new-survey-link">
          <Link to="/survey/new">
            Create a new survey
          </Link>
        </div>
        <div>{this.renderSurveys()}</div>
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return { surveys: Object.values(state.surveys) };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyAll);
