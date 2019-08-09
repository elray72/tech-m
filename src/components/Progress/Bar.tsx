import * as React from 'react';
import { connect } from 'react-redux';
import { setSelectedBar } from './_actions';
import classNames from 'classnames';

export interface IBar {
	id: string;
	selected?: string;
	dispatch: Function;
	onClick?: Function;
	value?: number;
}

const Bar: React.FC<IBar> = (props) => {

	const barInnerRef = React.useRef(null);
	const [value, setValue] = React.useState(props.value ? props.value : 0);

	const updateProgressBar = (value: number = 0) => {
		const bar = barInnerRef.current;
		const barWidth = value / 100;
		//bar.style.transform = `translateX(scaleX(${barWidth})`;
	};

	React.useEffect(() => {
		//const newValue = props.value + props.value;
		//updateProgressBar(props.value);
	}, [props.value]);

	const handleClick = () => {
		props.dispatch(setSelectedBar(props.id));
	};

	const componentClass = classNames('progress__bar', {
		'progress__bar--active': props.id === props.selected,
	});

	return (
		<div className={componentClass} onClick={handleClick}>
			<span className="progress__bar-outer">
				<span className="progress__bar-inner" ref={barInnerRef}>{value}</span>
			</span>
		</div>
	);
};

const mapStateToProps = (state: any, ownProps: any) => {
	const { progressReducer } = state;
	return {
		selected: progressReducer.selected,
		value: ownProps.value + progressReducer.value,
		...ownProps,
	};
};

export default connect(mapStateToProps)(Bar);
