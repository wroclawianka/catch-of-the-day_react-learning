import React from 'react';
import PropTypes from 'prop-types';

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

  Header.propTypes = {
    tagline: PropTypes.string.isRequired
  }

export default Header;
