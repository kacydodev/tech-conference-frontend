import type { ReactNode } from 'react';
import { Link, useLocation, type LinkProps } from 'react-router';

export const NavButton = ({
	children,
	...props
}: { children: ReactNode } & LinkProps) => {
	const location = useLocation();
	const isActive = props.to === location.pathname;

	if (isActive) {
		return (
			<Link
				{...props}
				className={`relative px-3 py-1 border border-green-200 after:absolute after:top-0.75 after:left-0.75 after:-inset-1 after:border-r-3 after:border-b-3 after:border-green-200 text-green-200 cursor-pointer uppercase ${props.className}`}>
				{children}
			</Link>
		);
	} else {
		const animationClass =
			'after:absolute hover:after:top-0.75 hover:after:left-0.75 hover:after:-inset-1 hover:after:border-r-3 hover:after:border-b-3';
		return (
			<Link
				{...props}
				className={`relative px-3 py-1 border border-white cursor-pointer uppercase ${animationClass} ${props.className}`}>
				{children}
			</Link>
		);
	}
};
