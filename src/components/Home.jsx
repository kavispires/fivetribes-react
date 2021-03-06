import React from 'react';
import PropTypes from 'prop-types';

import Image from './Image';

const Home = ({ props }) => (
  <main className="container-inner container-home">
    <div className="home-content">
      <Image src="logo" className="logo-top" alt="logo" />
      <div className="menu">
        <button
          type="button"
          className="btn-hollow btn-25"
          onClick={() => props.setScreen('setup')}
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
  setScreen: PropTypes.func,
};

Home.defaultProps = {
  setScreen: () => {},
};

export default Home;
