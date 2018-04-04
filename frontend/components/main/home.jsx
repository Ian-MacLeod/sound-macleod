import React from "react";

const Home = ({ signInDemoUser }) => (
  <div>
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
  </div>
);

export default Home;
