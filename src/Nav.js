import React from "react";
import "./Nav.css"

function Nav() {
    return (
        <div className="nav_contents">
            <div className="nav">
                <img 
                    className="nav_logo" 
                    src="https://variety.com/wp-content/uploads/2020/05/netflix-logo.png?w=1024" 
                    alt="Netflix Logo" 
                />

                <img
                    className="nav_avatar" 
                    src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" 
                    alt="text" 
                />
            </div>
        </div>
        
    )
    
}

export default Nav;
