import React from 'react';
import classNames from 'classnames';
import './_button.scss';

interface IButton {
	className?: string;
	value: number;
	onClick: any,
}

const Button: React.FC<IButton> = (props) => {
	const buttonRef = React.useRef<HTMLButtonElement>(null);

	const showRipple = (e: React.MouseEvent) => {
		const button = buttonRef.current;
		if (button) {
			const ripple = document.createElement('div');
			ripple.classList.add('button__ripple');
			ripple.style.top = `${e.clientY - button.offsetTop + window.pageYOffset}px`;
			ripple.style.left = `${e.clientX - button.offsetLeft + window.pageXOffset}px`;
			button.appendChild(ripple);
			setTimeout(()=>{ripple.remove()},10000);
		}
	};

	const handleClick = (e: React.MouseEvent) => {
		showRipple(e);
		if (props.onClick) {
			props.onClick();
		}
	};

	const componentClass = classNames(
		props.className,
		'button',
	);

	return (
		<button
			className={componentClass}
			ref={buttonRef}
			onClick={handleClick}
			value={props.value}
		>
			{props.value}
		</button>
	);
};

export default Button;
