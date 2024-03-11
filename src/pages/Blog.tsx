import { AvatarInitials } from '../components/BlogCard';

export function Blog({ title, content, author, publishedDate }: Blog) {
	return (
		<div>
			<div className="border-b border-b-slate-400 px-4 pb-8 mt-10   cursor-pointer">
				<div className="text-sm">
					<div className="mr-4 inline-block">
						<AvatarInitials authorName={author.name} />
					</div>
					<span>{author.name}</span>
					<span className="text-slate-600 mx-2"> &bull; </span>
					<span className="text-slate-600 text-sm">
						{publishedDate?.toLocaleDateString('en', {
							day: 'numeric',
							month: 'long',
							year: 'numeric',
						}) || 'N/A'}
					</span>
				</div>
				<div className="text-2xl font-bold tracking-tighter my-2 text-slate-900">
					{title}
				</div>

				<div className="text-slate-700 text-sm">{content}</div>
				<div className="text-slate-600 mt-8 mb-6">{`${Math.ceil(
					content.length / 400
				)} min read`}</div>
			</div>
		</div>
	);
}

export interface Blog {
	id: string;
	title: string;
	content: string;
	author: {
		name: string;
	};
	published: boolean;
	publishedDate?: Date;
}
