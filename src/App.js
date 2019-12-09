//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  //Home
  const [homeScore, setHomeScore] = useState(0);
  const homeScoresTD = e => {
    setHomeScore(homeScore + 7);
  };
  const homeScoresFG = e => {
    setHomeScore(homeScore + 3);
  };

  //Away
  const [awayScore, setAwayScore] = useState(0);
  const awayScoresTD = e => {
    setAwayScore(awayScore + 7);
  };
  const awayScoresFG = e => {
    setAwayScore(awayScore + 3);
  };

  //Quarter
  const [quarter, setQuarter] = useState(1);
  const addQuarter = e => {
    quarter < 4 ? setQuarter(quarter + 1) : clearInterval(quarter);
  };

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">
              <span>{homeScore}</span>
            </div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">
              <span>{awayScore}</span>
            </div>
          </div>
        </div>

        <BottomRow quarter={quarter} />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={homeScoresTD}>
            Home Touchdown
          </button>
          <button className="homeButtons__fieldGoal" onClick={homeScoresFG}>
            Home Field Goal
          </button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={awayScoresTD}>
            Away Touchdown
          </button>
          <button className="awayButtons__fieldGoal" onClick={awayScoresFG}>
            Away Field Goal
          </button>
        </div>
      </section>
      <button className="quarterButton" onClick={addQuarter}>
        Quarter
      </button>
    </div>
  );
}

export default App;
