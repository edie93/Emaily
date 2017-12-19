import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList';

const Dashboard = () => {

  return (
    <div id="home-section">
    <div className="home-inner mx-5 px-5" >
      <SurveyList />
      <div className="fixed-action-btn">
        <Link to="/surveys/new" className="btn-floating btn-large ">
          <i className="material-icons amber darken-2">add</i>
        </Link>
      </div>
      </div>
    </div>
  );
};

export default Dashboard;
