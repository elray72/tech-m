const initialState = {
	selected: undefined,
};

const progressReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case 'SET_SELECTED_BAR':
			return Object.assign({}, state, {
				selected: action.selected
			});
		case 'UPDATE_PROGRESS_BAR':
			console.log('UPDATE_PROGRESS_BAR');
			return Object.assign({}, state, {
				selected: action.selected,
				value: action.value,
			});
		default:
			return state;
	}
};

export default progressReducer;
