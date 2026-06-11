import type { ReactNode } from 'react';

export const RadioButton = ({
	children,
	...props
}: { children: ReactNode } & React.HTMLAttributes<HTMLDivElement>) => (
	<div {...props}>{children}</div>
);

const Input = ({ ...props }: React.InputHTMLAttributes<HTMLInputElement>) => (
	<input type='checkbox' {...props} />
);

const Label = ({
	children,
	...props
}: { children: ReactNode } & React.LabelHTMLAttributes<HTMLLabelElement>) => (
	<label {...props}>{children}</label>
);

RadioButton.Input = Input;
RadioButton.Label = Label;
