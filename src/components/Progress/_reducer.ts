import {
	RECEIVE_PROGRESS_BARS_CONFIG,
	REQUEST_PROGRESS_BARS_CONFIG,
	SET_SELECTED_BAR,
	UPDATE_PROGRESS_BAR,
} from './_actions';

interface IBar {
	id: string;
	value: number;
}

const initialState = {
	bars: [] as IBar[],
	config: undefined,
	selected: undefined,
	valueToAdd: 0,
};

const progressBarsReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case REQUEST_PROGRESS_BARS_CONFIG:
			return Object.assign({}, state, {
				selected: action.selected,
			});
		case RECEIVE_PROGRESS_BARS_CONFIG:
			return Object.assign({}, state, {
				config: action.data,
			});
		case SET_SELECTED_BAR:
			return Object.assign({}, state, {
				selected: action.selected,
			});
		case UPDATE_PROGRESS_BAR: {
			const { selected, valueToAdd } = action;
			const { bars } = state;
			const bar = bars.find((b: IBar) => b.id === selected);
			if (!bar) {
				bars.push({
					id: selected,
					value: valueToAdd > 0 ? valueToAdd : 0,
				});
			} else {
				let newValue = bar.value + valueToAdd;
				bar.value = newValue < 0 ? 0 : newValue;
			}

			return Object.assign({}, state, {
				selected,
				valueToAdd,
				bars,
			});
		}
		default:
			return state;
	}
};

export default progressBarsReducer;
