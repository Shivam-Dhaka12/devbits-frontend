import { useEffect, useState } from 'react';
import axios from 'axios';
import { BACKEND_URL } from '../../config';
import { TBlog } from '../pages/Blog';

type RequestConfig = {
	method: 'get' | 'post' | 'put' | 'delete' | 'patch';
	url: string;
	data?: object;
};

export function useBlog({ id }: { id: string }) {
	const [blog, setBlog] = useState<TBlog>();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchBlogs = async () => {
			try {
				const response = await axios.get(
					`${BACKEND_URL}/api/v1/blog/${id}`,
					{
						withCredentials: true,
					}
				);

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
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchBlogs = async () => {
			try {
				const response = await axios.get(
					`${BACKEND_URL}/api/v1/blog/all`,
					{
						withCredentials: true,
					}
				);
				console.log(response.data.data.blogs);
				setBlogs(response.data.data.blogs);
				setLoading(false);
			} catch (error) {
				console.error('Error fetching blogs:', error);
				setLoading(false);
				if (axios.isAxiosError(error)) {
					setError(error.response?.data.error);
				} else {
					setError('Error fetching blogs');
				}
				throw error;
			}
		};

		fetchBlogs();
	}, []);
	return { blogs, loading, error };
}

export function useHttpRequest() {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const sendRequest = async ({ method, url, data }: RequestConfig) => {
		setIsLoading(true);
		try {
			const response = await axios({
				method,
				url,
				data,
				withCredentials: true,
			});
			return response;
		} catch (e) {
			console.error(e);
			if (axios.isAxiosError(e)) {
				setError(`${e.response?.data.error}`);
			} else {
				if (e instanceof Error) setError(e.message);
				else setError('Something went wrong');
			}
			throw e;
		} finally {
			setIsLoading(false);
		}
	};

	return { isLoading, error, sendRequest };
}
