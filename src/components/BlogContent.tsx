import { TBlog } from '../pages/Blog';
import { AvatarInitials } from '../components/BlogCard';

export function BlogContent({ blog }: { blog: TBlog }) {
	return (
		<div className="md:grid grid-cols-12 px-12 lg:px-16 pt-10 max-w-screen-xl mx-auto ">
			<div className="col-span-12 lg:col-span-8 max-w-3xl">
				{/* blog */}
				<div className="text-5xl font-extrabold mb-6 text-slate-900 pr-10">
					{blog.title}
				</div>
				<div className="text-slate-500 mb-6">
					Posted on{' '}
					{(blog?.publishedDate &&
						new Date(blog?.publishedDate).toLocaleDateString(
							'en-US',
							{ year: 'numeric', month: 'long', day: 'numeric' }
						)) ||
						'N/A'}
				</div>
				<div className="text-slate-700 tracking-wide">
					{blog.content}
				</div>
			</div>
			{/* empty div */}
			<div className="hidden lg:block lg:col-span-1"></div>
			{/* author details */}
			<div className="hidden lg:block lg:col-span-3">
				<div className="font-medium text-slate-700">Author</div>
				<div className="flex mt-6 gap-4 items-baseline">
					<div>
						<AvatarInitials
							authorName={blog.author.name || 'Anonymous'}
							size="lg"
						/>
					</div>
					<div>
						<div className="text-2xl font-bold text-slate-800">
							{blog.author.name || 'Anonymous'}
						</div>
						<div className="text-slate-500">
							Random catch phrase about the author's ability to
							grab the user attention
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
