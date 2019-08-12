import React, { ReactElement, useState } from 'react';
import { connect } from 'react-redux';
import { fetchProgressBarsConfig, setSelectedBar } from './_actions';
import './_progress.scss';
import Bar, { IBar } from './Bar';
import Controls from './Controls';

interface IProgressBar {
	barData: number[];
	children: ReactElement<IBar>[];
	dispatch: Function;
	selected?: string;
	config?: any;
	isFetching?: boolean;
	lastUpdated?: string;
}

const ProgressBar: React.FC<IProgressBar> = (props) => {
	const { isFetching, barData } = props;

	const bars =
		(barData || []).map((n: number, i: number) => (
			<Bar id={`bar__${i}`} key={`bar__${i}`} value={n} />
		));

	// grab data on load via redux
	React.useEffect(() => {
		props.dispatch(fetchProgressBarsConfig());
	}, []);

	// set first element as default selected
	React.useEffect(() => {
		if (bars &&  bars[0]) {
			const defaultActive = bars[0];
			props.dispatch(setSelectedBar(defaultActive.props.id));
		}
	}, [bars]);


	return (
		<div className="progress">
			{bars}
			<Controls bars={bars} />
		</div>
	);
};

const mapStateToProps = (state: any, ownProps: any) => {
	const { config, lastUpdated, isFetching } = state.progressBars;
	let barData = [];
	if (config) {
		barData = config.bars;
	}
	return { config, barData, lastUpdated, isFetching, ...ownProps };
};

export default connect(mapStateToProps)(ProgressBar);
