import { Link, type LinkProps } from 'react-router';

export const Logo = ({ ...props }: LinkProps) => {
	return (
		<Link
			{...props}
			className={`text-green-200 font-sans font-bold uppercase ${props.className}`}>
			Devhorizon_26
		</Link>
	);
};
