import React from "react";

import Charts from "../charts/charts_container";

const Home = ({ signInDemoUser }) => (
  <div className="home">
    <div className="splash-image">
      <div className="overlay">
        <div className="cta">
          <h1>Discover Music on SoundMacLeod</h1>
          <p>If you prefer not to sign up, use a demo account instead.</p>
          <button onClick={signInDemoUser} className="colored">
            Demo account
          </button>
        </div>
      </div>
    </div>
    <Charts />
  </div>
);

export default Home;
