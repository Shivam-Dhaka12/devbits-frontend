import { Link } from 'react-router-dom';

export interface BlogCardProps {
	authorName: string;
	title: string;
	content: string;
	publishedDate: string;
	id: string;
}

export function BlogCard({
	id,
	authorName,
	title,
	content,
	publishedDate,
}: BlogCardProps) {
	return (
		<Link
			to={{
				pathname: `/blog/${id}`,
			}}
			className="min-w-full"
		>
			<div className="border-b border-b-slate-400 px-4 pb-8 mt-10   cursor-pointer">
				<div className="text-sm">
					<div className="mr-4 inline-block">
						<AvatarInitials authorName={authorName} size="sm" />
					</div>
					<span>{authorName}</span>
					<span className="text-slate-600 mx-2"> &bull; </span>
					<span className="text-slate-600 text-sm">
						{publishedDate}
					</span>
				</div>
				<div className="text-2xl font-bold tracking-tighter my-2 text-slate-900">
					{title}
				</div>

				<div className="text-slate-700 text-sm">
					{content.slice(0, 200) + '...'}
				</div>
				<div className="text-slate-600 mt-8 mb-6">{`${Math.ceil(
					content.length / 400
				)} min read`}</div>
			</div>
		</Link>
	);
}

export function AvatarInitials({
	authorName,
	size,
}: {
	authorName: string;
	size: 'sm' | 'lg';
}) {
	if (!authorName) return;

	const initialsArray = authorName.split(' ');
	const initials =
		initialsArray[0][0] +
		(initialsArray.length > 1 ? initialsArray[1][0] : '');

	return (
		<div
			className={`relative inline-flex items-center justify-center ${
				size === 'sm' ? 'w-6 h-6' : 'w-8 h-8'
			} h-6 overflow-hidden bg-gray-800 rounded-full`}
		>
			<span className="font-medium text-gray-300 text-xs">
				{initials}
			</span>
		</div>
	);
}
