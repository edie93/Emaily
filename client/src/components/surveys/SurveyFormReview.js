//shows user their form input for review
import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import formFields from "./formFields";
import {withRouter} from "react-router-dom";
import * as actions from "../../actions";
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

const SurveyFormReview = ({ onCancel, formValues,submitSurvey, history }) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });
  return (
    <div className ="home-inner text-center">
      <ReactCSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={600}
        transitionEnterTimeout={600}
        transitionLeaveTimeout={200}
        transitionName={'SlideIn'}
      >
      <h5>Please confirm your entries</h5>
      <br/>
      {reviewFields}
      <br/>
      <br/>
      <button
        className="yellow darken-3 white-text left btn-flat"
        onClick={onCancel}
      >
        Back
      </button>

      <button
        onClick={() => submitSurvey(formValues, history)}
        className="blue lighten-1 white-text right btn-flat"
      >
        Send Survey
        <i className="material-icons right">email</i>
      </button>
      </ReactCSSTransitionGroup>
    </div>

  );
};
function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
