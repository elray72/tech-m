export const setSelectedBar = (selected: any = null) => ({
	type: 'SET_SELECTED_BAR',
	selected,
});

export const updateProgressBar = (selected: any = null, value: number = 0) => ({
	type: 'UPDATE_PROGRESS_BAR',
	selected,
	value,
});
