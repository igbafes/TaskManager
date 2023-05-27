  import React from "react";
function Header() {
    return (
      <div>
        <nav className="nav">
          <div className="nav-left">
            <a className="brand" href="/">
              
            </a>
          </div>
          <div className="nav-center">
           <h1 className=" p-4">Task Manager</h1>
            <div className="tabs">
              <a href="https://samtech.com">Group Task</a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
  
  export default Header;