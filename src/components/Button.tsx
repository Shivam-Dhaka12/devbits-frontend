export function Button({
	children,
	className,
	onClick,
}: {
	children: React.ReactNode;
	className?: string;
	onClick: () => void;
}) {
	return (
		<button
			className={`bg-slate-900 text-slate-50  px-4 py-2 rounded-lg ${className}`}
			onClick={onClick}
		>
			{children}
		</button>
	);
}
