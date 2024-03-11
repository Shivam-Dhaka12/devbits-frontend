interface BlogCardProps {
	authorName: string;
	title: string;
	content: string;
	publishedDate: string;
}

export function BlogCard({
	authorName,
	title,
	content,
	publishedDate,
}: BlogCardProps) {
	return (
		<div className="border-t border-t-slate800 pt-6 mt-6">
			<div className="font-medium">
				<span>{authorName}</span>
				<span> - </span>
				<span className="text-slate-500 text-sm">{publishedDate}</span>
			</div>
			<div className="text-2xl font-bold tracking-tighter mt-2">
				{title}
			</div>

			<div>{content.slice(0, 200) + '...'}</div>
			<div className="text-slate-500 mt-2 mb-6">{`${Math.ceil(
				content.length / 400
			)} min read`}</div>
		</div>
	);
}
