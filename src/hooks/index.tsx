import { useEffect, useState } from 'react';
import axios from 'axios';
import { BACKEND_URL } from '../../config';

export function useBlogs() {
	const [blogs, setBlogs] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function getBlogs() {
			const res = await axios.get(`${BACKEND_URL}/api/v1/blog`);
			setBlogs(res.data);
			setLoading(false);
		}
		getBlogs();
	}, []);
	return { blogs, loading };
}
