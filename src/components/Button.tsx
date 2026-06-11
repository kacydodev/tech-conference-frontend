import type { ReactNode } from 'react';

export const Button = ({
	children,
	variants = 'black',
	...props
}: {
	children: ReactNode;
	variants?: 'black' | 'white';
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
	const variantsClass = {
		white: 'border-white after:border-white text-white',
		black: 'border-neutral-900 after:border-neutral-900 text-neutral-900',
	};

	const effectsClass = {
		white:
			'hover:bg-green-200 hover:border-green-200 hover:after:border-neutral-600 hover:text-black',
		black:
			'hover:bg-neutral-900 hover:border-neutral-900 hover:after:border-neutral-600 hover:text-white',
	};

	const animationClass =
		'after:absolute after:top-0.5 after:left-0.5 after:-inset-1 after:border-r-3 after:border-b-3 hover:after:top-0.75 hover:after:left-0.75 hover:after:-inset-1.75 hover:after:border-r-6 hover:after:border-b-6';

	return (
		<button
			{...props}
			className={`relative p-2 border cursor-pointer uppercase ${variantsClass[variants]} ${effectsClass[variants]} ${animationClass} ${props.className}`}>
			{children}
		</button>
	);
};
