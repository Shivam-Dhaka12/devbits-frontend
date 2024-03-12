import { BlogCard } from '../components/BlogCard';
import { BlogsSkeleton } from '../components/BlogsSkeleton';
import { useBlogs } from '../hooks';
import { TBlog } from './Blog';

export function Blogs() {
	const { blogs, loading }: { blogs: TBlog[]; loading: boolean } = useBlogs();

	return (
		<div className="px-6 flex justify-center flex-col items-center mx-auto max-w-2xl mt-6">
			{loading && (
				<div className="mt-4">
					<BlogsSkeleton />
					<BlogsSkeleton />
					<BlogsSkeleton />
					<BlogsSkeleton />
				</div>
			)}

			{blogs.map((blog) => {
				if (blog.publishedDate) {
					blog.publishedDate = new Date(blog.publishedDate);
				}
				return (
					<BlogCard
						key={blog.id}
						id={blog.id}
						title={blog.title}
						content={blog.content}
						authorName={blog.author.name}
						publishedDate={
							blog.publishedDate?.toLocaleDateString('en', {
								day: 'numeric',
								month: 'long',
								year: 'numeric',
							}) || 'N/A'
						}
					/>
				);
			})}
		</div>
	);
}
