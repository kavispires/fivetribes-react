import React from 'react';
import PropTypes from 'prop-types';

import Borders from './Borders';
import logo from '../images/logo.png';

const Home = ({ props }) => (
  <main className="container container-home">
    <Borders />
    <div className="home-content">
      <img src={logo} alt="logo" className="logo-image" />
      <div className="menu">
        <button
          type="button"
          className="btn-hollow btn-25"
          onClick={() => props.handleHomeButton('setup')}
        >
          Scorer
        </button>
        <button type="button" disabled className="btn-hollow btn-25">
          Solitaire
        </button>
        <button type="button" disabled className="btn-hollow btn-25">
          Reference
        </button>
      </div>
    </div>
  </main>
);

Home.propTypes = {
  props: PropTypes.object.isRequired,
  handleHomeButton: PropTypes.func,
};

Home.defaultProps = {
  handleHomeButton: () => {},
};

export default Home;