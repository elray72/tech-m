import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import progressReducer from '../components/Progress/_reducer';

export default (history: any) =>
	combineReducers({
		router: connectRouter(history),
		progressReducer,
	});
