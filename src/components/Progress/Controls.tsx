import React, { ReactElement, ReactNode } from 'react';
import { connect } from 'react-redux';
import { updateProgressBar } from './_actions';
import './_progress.scss';
import Button from '../../components/Button';
import { IBar } from './Bar';

interface IProps {
	bars: ReactElement<IBar>[];
	barData: number[];
	buttons?: number[];
	limit?: number;
	dispatch: Function;
	selected: string;
}

const Controls: React.FC<IProps> = (props) => {
	const { buttons } = props;

	const selectedBar = React.Children.map(props.bars, (b) => {
		const { id, value = 0 } = b.props;
		return { id, value };
	}).find((b) => b.id === props.selected);

	const handleClick = (valueToAdd: number) => {
		if (selectedBar) {
			props.dispatch(updateProgressBar(props.selected, valueToAdd));
		}
	};

	return (
		<div className="progress__controls">
			{(buttons || []).map((n: number) => (
				<Button
					className="progress__button"
					value={n}
					onClick={() => handleClick(n)}
					key={`progress_button__${n}`}
				/>
			))}
		</div>
	);
};

const mapStateToProps = (state: any, ownProps: any) => {
	const { selected, config } = state.progressBars;
	//
	let barData,
		buttons = [];
	if (config) {
		barData = config.bars;
		buttons = config.buttons.sort((a: number, b: number) => {
			return a - b;
		});
	}
	return { selected, barData, buttons, ...ownProps };
};

export default connect(mapStateToProps)(Controls);
