import React, { ReactElement } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import './_progress.scss';
import Bar, { IBar } from './Bar';
import Controls from './Controls';
import { setSelectedBar } from './_actions';

interface IProgressBar {
	children?: ReactElement<IBar>[];
	dispatch: Function;
	selected?: string;
}

const ProgressBar: React.FC<IProgressBar> = (props) => {

	React.useEffect(() => {
		if (props.children) {
			const defaultActive = props.children[0];
			props.dispatch(setSelectedBar(defaultActive.props.id));
		}
	}, []);

	return (
		<div className="progress">
			{props.children}
			<Controls />
		</div>
	);
};

export default connect()(ProgressBar);
