import axios from 'axios';

export const getProgressBarsData = async () => {
	let results = await axios.get('http://pb-api.herokuapp.com/bars') as any;
	return results.data;
};
