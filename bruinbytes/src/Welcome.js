import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

// Welcome page of application
function Welcome(props) {

    const navigate = useNavigate();
    const handleClick = useCallback(
      () => navigate("/main", { replace: true }),
      [navigate]
    );

    return (
      <div className='wrapper'>
        <header className="App-header">
          <h1>Bruin Bytes</h1>
          <img src="bruin.png" alt="cyborg bear"/>
          <p>
            Play with <Button onClick={handleClick}>Logic Gates</Button>
          </p>
        </header>
      </div>
    );
}

export default Welcome;