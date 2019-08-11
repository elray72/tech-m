import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import progressBarsReducer from '../components/Progress/_reducer';

export default (history: any) =>
	combineReducers({
		router: connectRouter(history),
		progressBars: progressBarsReducer,
	});
