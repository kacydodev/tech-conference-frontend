import { useState, type ReactNode } from 'react';

export const Button = ({
	children,
	variants = 'default',
	colors = 'black',
	toggle = false,
	...props
}: {
	children: ReactNode;
	variants?: 'default' | 'link';
	colors?: 'black' | 'white';
	toggle?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
	const [isActive, setActive] = useState(false);

	if (variants === 'link') {
		return (
			<button
				{...props}
				className={`border-inherit cursor-pointer uppercase hover:underline underline-offset-5 ${props.className}`}>
				{children}
			</button>
		);
	} else {
		const colorClass = {
			white: {
				color: 'border-white after:border-white text-white',
				effect:
					'hover:bg-green-200 hover:border-green-200 hover:after:border-neutral-600 hover:text-black',
				active: '',
			},
			black: {
				color: 'border-neutral-900 after:border-neutral-900 text-neutral-900',
				effect:
					'hover:bg-neutral-900 hover:border-neutral-900 hover:after:border-neutral-600 hover:text-white',
				active: '',
			},
		};

		const animationClass =
			'after:absolute after:top-0.5 after:left-0.5 after:-inset-1 after:border-r-3 after:border-b-3 hover:after:top-0.75 hover:after:left-0.75 hover:after:-inset-1.75 hover:after:border-r-6 hover:after:border-b-6';

		return (
			<button
				{...props}
				className={`relative px-3 py-1 border cursor-pointer uppercase ${colorClass[colors].color} ${colorClass[colors].effect} ${animationClass} ${props.className}`}>
				{children}
			</button>
		);
	}
};
