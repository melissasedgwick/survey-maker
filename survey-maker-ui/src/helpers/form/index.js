import React from 'react';

export const renderError = ({ error, touched }) => {
  if (touched && error) {
    return (
      <div className="ui error message">
        <div className="header">{error}</div>
      </div>
    );
  } else { return null };
};

export const renderInput = ({ input, label, meta }) => {
  return (
    <div className="field">
      <label>{label}</label>
      <input {...input} />
      {renderError(meta)}
    </div>
  );
}

export const renderPasswordInput = ({ input, label, meta }) => {
  return (
    <div className="field">
      <label>{label}</label>
      <input {...input} type="password" />
      {renderError(meta)}
    </div>
  );
}
