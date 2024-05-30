import { useEffect, useState } from 'react';
import axios from 'axios';
import { BACKEND_URL } from '../../config';
import { TBlog } from '../pages/Blog';

export function useBlog({ id }: { id: string }) {
	const [blog, setBlog] = useState<TBlog>();
	const [loading, setLoading] = useState(true);

	console.log('Backend URL:', BACKEND_URL);

	useEffect(() => {
		const fetchBlogs = async () => {
			try {
				const token = localStorage.getItem('token');
				console.log(token?.toString());
				const response = await axios.get(
					`${BACKEND_URL}/api/v1/blog/${id}`,
					{
						headers: { Authorization: `Bearer ${token}` },
					}
				);

				console.log(response.data.data);
				setBlog(response.data.data);
				setLoading(false);
			} catch (error) {
				console.error('Error fetching blogs:', error);
				setLoading(false);
			}
		};

		fetchBlogs();
	}, [id]);
	return { blog, loading };
}
export function useBlogs() {
	const [blogs, setBlogs] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchBlogs = async () => {
			try {
				const token = localStorage.getItem('token');
				console.log(token?.toString());
				const response = await axios.get(
					`${BACKEND_URL}/api/v1/blog/all`,
					{
						headers: { Authorization: `Bearer ${token}` },
					}
				);
				setBlogs(response.data.data.blogs);
				setLoading(false);
			} catch (error) {
				console.error('Error fetching blogs:', error);
				setLoading(false);
			}
		};

		fetchBlogs();
	}, []);
	return { blogs, loading };
}
