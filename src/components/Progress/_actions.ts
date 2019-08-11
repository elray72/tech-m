import { getProgressBarsData } from '../../api/progressBarsApi';

export const REQUEST_PROGRESS_BARS_CONFIG = 'REQUEST_PROGRESS_BARS_CONFIG';
export const RECEIVE_PROGRESS_BARS_CONFIG = 'RECEIVE_PROGRESS_BARS_CONFIG';
export const SET_SELECTED_BAR = 'SET_SELECTED_BAR';
export const UPDATE_PROGRESS_BAR = 'UPDATE_PROGRESS_BAR';

export const requestProgressBarsConfig = () => {
	return {
		type: REQUEST_PROGRESS_BARS_CONFIG,
	}
};

export const receiveProgressBarsConfig = (data: any) => {
	return {
		type: RECEIVE_PROGRESS_BARS_CONFIG,
		config: data,
		receivedAt: Date.now()
	};
};

export const fetchProgressBarsConfig = () => {
	return async (dispatch: Function) => {
		dispatch(requestProgressBarsConfig());
		let data = await getProgressBarsData();
		return dispatch(receiveProgressBarsConfig(data));
	}
};

export const setSelectedBar = (selected: string) => ({
	type: SET_SELECTED_BAR,
	selected,
});

export const updateProgressBar = (selected: string, valueToAdd = 0) => ({
	type: UPDATE_PROGRESS_BAR,
	selected,
	valueToAdd,
});
