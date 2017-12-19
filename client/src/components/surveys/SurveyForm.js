//SurveyForm shows a form for a user to add input
import _ from "lodash";
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import {Link} from "react-router-dom";
import SurveyField from "./SurveyField";
import validateEmails from "../../utils/validateEmails";
import formFields from "./formFields";
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

class SurveyForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={SurveyField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }
  render() {
    return (

      <div className="home-inner px-5">
      <ReactCSSTransitionGroup
              transitionAppear={true}
              transitionAppearTimeout={600}
              transitionEnterTimeout={600}
              transitionLeaveTimeout={200}
              transitionName={'SlideOut'}
            >
        <form onSubmit={this.props.handleSubmit (this.props.onSurveySubmit)}>
          {this.renderFields()}
          <button type="submit"className=" blue lighten-1 btn-flat right white-text">
            Submit
            <i className = "material-icons right">done</i>
          </button>
          <Link to="/surveys"className="red btn-flat left white-text">
            Cancel
            <i className = "material-icons right">cancel</i>
          </Link>
        </form>
        </ReactCSSTransitionGroup>

      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  _.each(formFields, ({name})=>{
    if(!values[name]){
      errors[name] = `Require ${name}`;
    }
  });
  errors.recipients = validateEmails(values.recipients || "")
  return errors;
}

export default reduxForm({
  validate,
  form: "surveyForm",
  destroyOnUnmount: false
})(SurveyForm);
