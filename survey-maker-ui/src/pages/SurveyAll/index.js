import React from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../redux/actions';

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
        <h2>SurveyAll</h2>
        <div>{this.renderSurveys()}</div>
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return { surveys: Object.values(state.surveys) };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyAll);
