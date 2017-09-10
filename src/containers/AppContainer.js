import { connect } from 'react-redux';

import App from '../components/App';

import {
	selectMode
} from '../reducers/app';

import {
	controller,
	setExpansions,
	setNumPlayers,
	updateCell,
	updateRadioDjinn,
	updateScreen,
} from '../reducers/scorer';

const mapStateToProps = (state) => ({ app: state.app, scorer: state.scorer });

const mapDispatchToProps = {
	controller,
	selectMode,
	setExpansions,
	setNumPlayers,
	updateCell,
	updateRadioDjinn,
	updateScreen,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
