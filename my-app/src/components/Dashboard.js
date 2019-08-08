import React, { useState } from "react";
import Display from "./Display";

const Dashboard = () => {
    const [ballCount, setBallCount] = useState(0);
    const [strikeCount, setStrikeCount] = useState(0);
    
    const countBalls = () => {
        if (ballCount < 4) {
            setBallCount(ballCount + 1);
        } else 
        {
            setBallCount(0);
        }
      };
      const countStrikes = () => {
        if (strikeCount < 3) {
            setStrikeCount(strikeCount + 1);
        } else 
        {
            setStrikeCount(0);
        }
      };
    
      const countFouls = () => {
        if (strikeCount === 0) {
            setStrikeCount(1);
        } 
        else if (strikeCount === 1) {
            setStrikeCount(2);
        } 
        else {
            setStrikeCount(strikeCount);
        }
      };

      const reset = () => {
          setStrikeCount(0);
          setBallCount(0);
      }

    return (
      <div className="dashboard">
        <Display
        balls={ballCount}
        setBallCount={setBallCount}
        strikes={strikeCount}
        setStrikeCount={setStrikeCount}
      />
      <div>
        <button onClick={() => countStrikes()}>Strike</button>
        <button onClick={() => countBalls()}>Ball</button>
        <button onClick={() => countFouls()}>Foul</button>
        <button onClick={() => reset()}>Hit</button>
      </div>
      </div>
    );
  }

  export default Dashboard