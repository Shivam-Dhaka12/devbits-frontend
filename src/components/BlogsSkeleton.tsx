export function BlogsSkeleton() {
	return (
		<div
			role="status"
			className="w-screen max-w-screen-sm animate-pulse px-6"
		>
			<div className="border-b border-b-slate-100 px-4 pb-8 mt-10   cursor-pointer">
				<div className="text-sm">
					<div className="flex items-center">
						<div className="mr-4 inline-block">
							<div className="h-6 bg-gray-200 rounded-full w-6 mb-4"></div>
						</div>
						<div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
						<div className="text-slate-200 mx-4 place-self-start">
							{' '}
							&bull;{' '}
						</div>
						<div className="h-2.5 bg-gray-200 rounded-full w-28 mb-4"></div>
					</div>
				</div>
				<div className="text-2xl font-bold tracking-tighter my-2 text-slate-200 h-4 bg-gray-200 rounded-full max-w-[460px] mb-4"></div>

				<div className="text-slate-700 text-sm h-2 bg-gray-200 rounded-full max-w-screen-lg mb-2"></div>
				<div className="text-slate-700 text-sm h-2 bg-gray-200 rounded-full max-w-screen-lg mb-2"></div>
				<div className="text-slate-700 text-sm h-2 bg-gray-200 rounded-full max-w-screen-lg mb-2"></div>
				<div className="text-slate-700 text-sm h-2 bg-gray-200 rounded-full max-w-screen-lg mb-2"></div>

				<div className="text-slate-600 mt-8  h-2 bg-gray-200 rounded-full max-w-[160px] mb-4"></div>
			</div>

			<span className="sr-only">Loading...</span>
		</div>
	);
}
