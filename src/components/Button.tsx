export function Button({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<button
			className={`bg-slate-900 text-slate-50  px-4 py-2 rounded-lg ${className}`}
			type="submit"
		>
			{children}
		</button>
	);
}
