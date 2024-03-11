import { useEffect, useState } from 'react';
import axios from 'axios';
import { BACKEND_URL } from '../../config';
// import { Blog } from '../pages/Blogs';

export function useBlogs() {
	const [blogs, setBlogs] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchBlogs = async () => {
			try {
				const token = localStorage.getItem('token');
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
