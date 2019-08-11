import React, { ReactElement } from 'react';
import { connect } from 'react-redux';
import { fetchProgressBarsConfig, setSelectedBar } from './_actions';
import './_progress.scss';
import { IBar } from './Bar';
import Controls from './Controls';

interface IProgressBar {
	children: ReactElement<IBar>[];
	dispatch: Function;
	selected?: string;
}

const ProgressBar: React.FC<IProgressBar> = (props) => {
	const progressBars = props.children.length
		? props.children
		: ([props.children] as ReactElement<IBar>[]);

	React.useEffect(() => {
		props.dispatch(fetchProgressBarsConfig());

		if (progressBars) {
			const defaultActive = progressBars[0];
			props.dispatch(setSelectedBar(defaultActive.props.id));
		}
	}, []);

	return (
		<div className="progress">
			{props.children}
			<Controls bars={progressBars} />
		</div>
	);
};

export default connect()(ProgressBar);
