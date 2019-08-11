import React, { ReactElement, ReactNode } from 'react';
import { connect } from 'react-redux';
import { updateProgressBar } from './_actions';
import './_progress.scss';
import { IBar } from './Bar';

interface IProps {
	bars: ReactElement<IBar>[];
	dispatch: Function;
	selected: string;
}

interface IButton {
	children?: ReactNode;
	value: number;
}

const Controls: React.FC<IProps> = (props) => {
	const selectedBar = React.Children.map(props.bars, (b, i) => {
		const { id, value = 0 } = b.props;
		return { id, value };
	}).find((b) => b.id === props.selected);

	const handleClick = (valueToAdd: number) => {
		if (selectedBar) {
			props.dispatch(updateProgressBar(props.selected, valueToAdd));
		}
	};

	const Button = (props: IButton) => {
		return (
			<button
				className="progress__button"
				onClick={() => handleClick(props.value)}
				value={props.value}
			>
				{props.value}
			</button>
		);
	};

	return (
		<div className="progress__controls">
			<Button value={-25} />
			<Button value={-10} />
			<Button value={10} />
			<Button value={25} />
		</div>
	);
};

const mapStateToProps = (state: any, ownProps: any) => {
	const { selected } = state.progressBars;
	return { selected, ...ownProps };
};

export default connect(mapStateToProps)(Controls);
