//import { AvatarInitials } from '../components/BlogCard';
import { BlogContent } from '../components/BlogContent';
import { Spinner } from '../components/Spinner';
import { useBlog } from '../hooks';
import { useParams } from 'react-router-dom';

export interface TBlog {
	id: string;
	title: string;
	content: string;
	author: {
		name: string;
	};
	published: boolean;
	publishedDate?: Date;
}
export function Blog() {
	const { id } = useParams();
	const { loading, blog } = useBlog({
		id: id || '',
	});

	if (loading) {
		return (
			<div className="h-svh flex justify-center items-center">
				<Spinner />
			</div>
		);
	} else
		return (
			<div>
				<BlogContent blog={blog!} />
			</div>
		);
}
