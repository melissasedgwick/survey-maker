import React from 'react';
import { Link } from 'react-router-dom';
import SignInOut from '../SignInOut';

export class Header extends React.Component {
  render() {
    return (
      <div className="ui secondary pointing menu">
        <Link to="/" className="item" id="survey-maker-link">
          <h2>Survey Maker</h2>
        </Link>
        <div className="right menu">
          <Link to="/" className="item" id="all-surveys-link">
            <h2>All Surveys</h2>
          </Link>
          <SignInOut />
        </div>
      </div>
    );
  };
};

export default Header;
