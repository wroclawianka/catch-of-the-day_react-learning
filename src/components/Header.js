import React from 'react';

// Stateless functional component. there is couple of variaton of this, check video 9 for details
const Header = ({tagline}) => (
  //implicit return
    <header className="top">
        <h1>
          Catch
          <span className="ofThe">
            <span className="of">Of</span>
            <span className="the">The</span>
          </span>
          Day
        </h1>
        <h3 className="tagline">
          <span>{tagline}</span>
        </h3>
    </header>
  )

export default Header;
