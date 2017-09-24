import React from 'react';
import { connect } from 'react-redux';

import { fieldChange, formSubmit } from './actions';

class RedditForm extends React.Component {

  constructor(props) {
    super(props);
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFieldChange(e) {
    this.props.onFieldChange(this.props.formId, e.target.name, e.target.value);
  }

  handleFormSubmit(e) {
    this.props.onFormSubmit(this.props.formId);
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <div>
          Login: <input type="text" name="login" onChange={this.handleFieldChange} />
        </div>
        <div>
          Password: <input type="password" name="password" onChange={this.handleFieldChange} />
        </div>
        <div>
          <button onClick={this.handleFormSubmit}>Submit</button>
        </div>
      </div>
    );
  }
}

const RedditFormContainer = connect(
  state => {
    return { ...state };
  },
  dispatch => {
    return {
      onFieldChange: (formId, fieldId, value) => dispatch(fieldChange(formId, fieldId, value)),
      onFormSubmit: (formId) => dispatch(formSubmit(formId))
    };
  }
)(RedditForm);

export default RedditFormContainer;
