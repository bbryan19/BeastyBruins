import React from "react";

// Used for page not found
function NotFound() {
    return (
        <div className="wrapper" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <h1 style={{color: 'var(--dark-slate)'}}>404: PAGE NOT FOUND</h1>
            </div>
            <img src="404Bruin.png" alt="Cyborg Bruin holding a 404 sign" style={{width: '40%', height: 'auto'}}/>
        </div>
    );
}

export default NotFound;