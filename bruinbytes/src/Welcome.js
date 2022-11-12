import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

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
            Play with Logic Gates
          </p>
        </header>
      </div>
    );
}

export default Welcome;