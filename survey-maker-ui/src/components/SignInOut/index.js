import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signoutUser } from '../../redux/actions';

export class SignInOut extends React.Component {
  renderButton() {
    if (!this.props.isSignedIn) {
      return (
        <div>
          <Link className="ui button primary" to="/users/signin" id="sign-in-link">
            Sign In
          </Link>
          <Link className="ui button primary" to="/users/new" id="sign-up-link">
            Sign Up
          </Link>
        </div>
      )
    }
    if (this.props.isSignedIn) {
      return (
        <button className="ui red button" onClick={this.props.signoutUser}>
          Sign Out
        </button>
      )
    }
  }

  render() {
    return (
      <div className="item">
        {this.renderButton()}
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return { isSignedIn: state.users.isSignedIn };
};

export default connect(mapStateToProps, { signoutUser })(SignInOut);
