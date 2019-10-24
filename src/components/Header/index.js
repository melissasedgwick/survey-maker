import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

class Header extends React.Component {
  render() {
    return (
      <div id="header-container">
        <div className="header-left">
          <Link to="/" id="survey-maker-link">
            <h2>Survey Maker</h2>
          </Link>
        </div>
        <div className="header-right">
        <Link to="/" id="all-surveys-link">
          <h2>All Surveys</h2>
        </Link>
        </div>
      </div>
    );
  };
};

export default Header;
