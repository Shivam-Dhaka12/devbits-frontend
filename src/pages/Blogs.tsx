import { BlogCard } from '../components/BlogCard';
import { useBlogs } from '../hooks';
import { Blog } from './Blog';

export function Blogs() {
	const { blogs, loading }: { blogs: Blog[]; loading: boolean } = useBlogs();

	if (loading) return <div>Loading...</div>;
	else {
		return (
			<div className="px-6 flex justify-center flex-col items-center mx-auto max-w-2xl ">
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
}
