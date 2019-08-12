import * as React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { setSelectedBar, updateProgressBar } from './_actions';
import './_progress.scss';

export interface IBar {
	id: string;
	selected?: string;
	dispatch: Function;
	limit: number;
	onClick?: Function;
	value?: number;
	valueToAdd?: number;
}

const Bar: React.FC<IBar> = (props) => {
	const { id, value = 0, valueToAdd = 0, limit } = props;
	const barInnerRef = React.useRef<HTMLSpanElement>(null);

	React.useEffect(() => {
		props.dispatch(updateProgressBar(id, props.value));
	}, []);

	React.useEffect(() => {
		//props.dispatch(updateProgressBar(id, props.value));
		updateProgressBarInner(value);
	}, [props.value]);

	const updateProgressBarInner = (value: number) => {
		const bar = barInnerRef.current;
		if (bar) {
			const barWidth = value / 100;
			bar.style.transform = `scaleX(${barWidth})`;
			bar.style.transitionDuration = `${Math.abs(valueToAdd / 100)}s`;
		}
	};

	const handleClick = () => {
		props.dispatch(setSelectedBar(props.id));
	};

	const componentClass = classNames('progress__bar', {
		'progress__bar--active': props.id === props.selected,
		'progress__bar--over': value > 100,
	});

	return (
		<div id={id} className={componentClass} onClick={handleClick}>
			<span className="progress__bar-outer">
				<span className="progress__bar-inner" ref={barInnerRef} />
				<span className="progress__bar-label">{value}%</span>
			</span>
			<span className="progress__bar-legend">{value} / {limit}</span>
		</div>
	);
};

const mapStateToProps = (state: any, ownProps: any) => {
	const { selected, bars, valueToAdd, config } = state.progressBars;
	const { limit } = config;
	const currBar = bars.find((b: any) => b.id === ownProps.id);
	let { value = 0 } = currBar ? currBar : ownProps;

	return {
		selected,
		value,
		valueToAdd,
		limit,
		...state,
	};
};

export default connect(mapStateToProps)(Bar);
