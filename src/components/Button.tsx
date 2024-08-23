export function Button({
	children,
	type,
	className,
	color,
	onClick,
	disabled,
}: {
	children: React.ReactNode;
	type?: 'submit' | 'reset' | 'button' | undefined;
	className?: string;
	color?: 'white';
	onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
	disabled?: boolean;
}) {
	return (
		<button
			className={`${
				color == 'white'
					? `bg-slate-50 text-slate-900 border border-slate-900`
					: `bg-slate-900 text-slate-50 `
			} px-4 py-2 rounded-lg min-h-12 ${className} hover:bg-slate-950`}
			type={type ? type : 'submit'}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	);
}
