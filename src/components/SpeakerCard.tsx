import type { ReactNode } from 'react';
import { Link, type LinkProps } from 'react-router';

export const SpeakerCard = ({
	children,
	...props
}: { children: ReactNode } & LinkProps) => {
	const colorClass = `border-neutral-600 hover:border-white hover:after:border-white`;

	const animationClass =
		'after:absolute hover:after:top-0.75 hover:after:left-0.75 hover:after:-inset-1.75 hover:after:border-r-6 hover:after:border-b-6';

	const childrenClass =
		'[&>*:last-child]:border-t [&>*:last-child]:border-neutral-600 [&>*:last-child]:text-green-200!';

	return (
		<Link
			{...props}
			className={`relative w-70 m-1 border ${colorClass} ${animationClass} ${childrenClass} ${props.className}`}>
			{children}
		</Link>
	);
};
