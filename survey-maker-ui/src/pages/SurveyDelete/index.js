import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSurvey, deleteSurvey } from '../../redux/actions';

export class SurveyDelete extends React.Component {
  componentDidMount() {
    this.props.fetchSurvey(this.props.match.params.id);
  }

  renderContent() {
    if (!this.props.survey) {
      return 'Are you sure you want to delete this survey?'
    }

    return `Are you sure you want to delete this survey: ${this.props.survey.name}?`
  }

  renderActions() {
    const { id } = this.props.match.params

    return (
      <div>
        <button onClick={() => this.props.deleteSurvey(id)} className="ui button negative">
          Delete
        </button>
        <Link to="/" className="ui button">Cancel</Link>
      </div>
    );
  }

  render() {
    return (
      <div>
        <h2>Delete Survey</h2>
        {this.renderContent()}
        {this.renderActions()}
      </div>
    );
  };
};

const mapStateToProps = (state, ownProps) => {
  return { survey: state.surveys[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchSurvey, deleteSurvey })(SurveyDelete);
