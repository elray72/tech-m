import React, { ReactElement, ReactNode } from 'react';
import { connect } from 'react-redux';
import { updateProgressBar } from './_actions';

interface IProps {
	children?: ReactElement[];
	dispatch: Function;
	selected: string;
}

interface IButton {
	children?: ReactNode;
	value: number;
}

const Controls: React.FC<IProps> = (props) => {
	const handleClick = (value: number) => {
		console.log(value);
		props.dispatch(updateProgressBar(props.selected, value))
	};

	const Button = (props: IButton) => {
		return <button onClick={() => handleClick(props.value)} value={props.value}>
			{props.value}
		</button>
	};

	return (
		<div>
			<Button value={-25} />
			<Button value={-10} />
			<Button value={10} />
			<Button value={25} />
		</div>
	);
};

const mapStateToProps = (state: any, ownProps: any) => {
	const { progressReducer } = state;
	return {
		selected: progressReducer.selected,
		...ownProps,
	};
};

export default connect(mapStateToProps)(Controls);
