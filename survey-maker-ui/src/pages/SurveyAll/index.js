import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../redux/actions';

export class SurveyAll extends React.Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderEditDelete(survey) {
    return (
      <div className="right floated content">
        <Link to={`/survey/edit/${survey.id}`} className="ui button primary" >
          Edit
        </Link>
        <Link to={`/survey/delete/${survey.id}`} className="ui button negative">
          Delete
        </Link>
      </div>
    );
  }

  renderSurveys() {
    return this.props.surveys.map(survey => {
      return(
        <div key={survey.id} className="item">
          {this.renderEditDelete(survey)}
          <div className="content">
            <Link to={`survey/${survey.id}`} className="header">
              {survey.name}
            </Link>
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
          <Link to="/survey/new" className="ui button primary">
            Create a new survey
          </Link>
        </div>
        <div className="ui celled list">
          {this.renderSurveys()}
        </div>
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return { surveys: Object.values(state.surveys.surveys) };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyAll);
