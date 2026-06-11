import type { ReactNode } from 'react';

export const HeroHeader = ({
	children,
	...props
}: { children?: ReactNode } & React.HTMLAttributes<HTMLHeadingElement>) => (
	<h1
		{...props}
		className={`font-sans text-header-larger font-bold ${props.className}`}>
		{children}
	</h1>
);

export const SectionHeader = ({
	children,
	...props
}: { children?: ReactNode } & React.HTMLAttributes<HTMLHeadingElement>) => (
	<h2
		{...props}
		className={`font-sans text-header-medium font-semibold uppercase before:content-['//'] before:mr-2 ${props.className}`}>
		{children}
	</h2>
);

export const Title = ({
	children,
	...props
}: { children?: ReactNode } & React.HTMLAttributes<HTMLHeadingElement>) => (
	<h3
		{...props}
		className={`font-sans text-header-large font-bold lowercase ${props.className}`}>
		{children}
	</h3>
);

export const Subtitle = ({
	children,
	...props
}: { children?: ReactNode } & React.HTMLAttributes<HTMLHeadingElement>) => (
	<h4
		{...props}
		className={`font-mono text-header-small uppercase ${props.className}`}>
		{children}
	</h4>
);

// export const FooterHeader = ({
// 	children,
// 	...props
// }: { children?: ReactNode } & React.HTMLAttributes<HTMLHeadingElement>) => (
// 	<h5
// 		{...props}
// 		className={`font-sans text-header-medium font-semibold ${props.className}`}>
// 		{children}
// 	</h5>
// );

export const FooterTitle = ({
	children,
	...props
}: { children?: ReactNode } & React.HTMLAttributes<HTMLHeadingElement>) => (
	<h6
		{...props}
		className={`font-sans text-header-medium font-bold lowercase before:content-['//'] before:mr-2 ${props.className}`}>
		{children}
	</h6>
);
