import { toast } from 'react-toastify';
import { BlogCard } from '../components/BlogCard';
import { BlogsSkeleton } from '../components/BlogsSkeleton';
import { useBlogs } from '../hooks';
import { TBlog } from './Blog';
import { useEffect } from 'react';

export function Blogs() {
	const {
		blogs,
		loading,
		error,
	}: { blogs: TBlog[]; loading: boolean; error: string | null } = useBlogs();

	// Show error toast only when error changes
	useEffect(() => {
		if (error) {
			toast.error(error);
		}
	}, [error]);

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
				return (
					<BlogCard
						key={blog.id}
						id={blog.id}
						title={blog.title}
						content={blog.content}
						authorName={blog.author.name}
						publishedDate={
							(blog?.publishedDate &&
								new Date(
									blog?.publishedDate
								).toLocaleDateString('en-US', {
									year: 'numeric',
									month: 'long',
									day: 'numeric',
								})) ||
							'N/A'
						}
					/>
				);
			})}
		</div>
	);
}
