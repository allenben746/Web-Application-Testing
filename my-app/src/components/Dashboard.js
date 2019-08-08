import React, { useState } from "react";
import Display from "./Display";

const Dashboard = () => {
    const [ballCount, setBallCount] = useState(0);
    const [strikeCount, setStrikeCount] = useState(0);
    
    return (
      <div className="dashboard">
      </div>
    );
  }

  export default Dashboard