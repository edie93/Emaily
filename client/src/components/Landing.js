import React from "react";
const Landing = () => {
  return (
    <div id="home-section">


    <div className="home-inner px-5 m-5" >
    <h1 className="p-4 display-2">Emaily</h1>
    <div className="d-flex flex-row">
      <div className="p-3 align-self-start">
<i className = "material-icons">check</i>      </div>
      <div className="p-3 lead align-self-end">
        Send Surveys to Your Clients
      </div>
      </div>
      <div className="d-flex flex-row">
        <div className="p-3 align-self-start">
  <i className = "material-icons">check</i>      </div>
        <div className="p-3 lead align-self-end">
          Collect Feedback from Them
        </div>
        </div>
    <h4 className="p-4 pt-2">Please <a className="text-white" href="/auth/google">Login With Google</a></h4>

      </div>
    </div>


  );
};
export default Landing;
