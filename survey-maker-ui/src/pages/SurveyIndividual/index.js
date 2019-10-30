import React from 'react';
import { connect } from 'react-redux';
import { fetchSurvey } from '../../redux/actions';

export class SurveyIndividual extends React.Component {
  componentDidMount() {
    this.props.fetchSurvey(this.props.match.params.id);
  }

  render() {
    if (!this.props.survey) {
      return <div>Loading...</div>
    }

    const { name } = this.props.survey;

    return (
      <div>
        <h2>{name}</h2>
      </div>
    );
  };
};

const mapStateToProps = (state, ownProps) => {
  return {
    survey: state.surveys[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps, { fetchSurvey})(SurveyIndividual);
