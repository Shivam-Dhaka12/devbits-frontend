import axios from 'axios';
import { Button } from '../components/Button';
import { BACKEND_URL } from '../../config';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export function Publish() {
	const [blogData, setBlogData] = useState({
		title: '',
		content: '',
		published: false,
	});

	const navigate = useNavigate();
	async function sendRequest(e: React.FormEvent) {
		e.preventDefault();
		await axios.post(
			`${BACKEND_URL}/api/v1/blog`,
			{
				...blogData,
				published: true,
			},
			{
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`,
				},
			}
		);

		navigate('/blogs');
	}
	return (
		<div className="flex justify-center w-full px-16">
			<form
				className="max-w-4xl my-10 w-full"
				onSubmit={(e) => sendRequest(e)}
			>
				<input
					type="text"
					className="bg-slate-50 border border-gray-800 text-slate-900 text-sm rounded-lg block w-full p-2.5 outline-slate-600"
					placeholder="Add your title"
					onChange={(e) =>
						setBlogData((c) => ({ ...c, title: e.target.value }))
					}
				/>
				<textarea
					className="bg-slate-50 border border-gray-800 text-slate-900 text-sm rounded-lg  block w-full p-2.5 mt-6 outline-slate-600 h-72"
					placeholder="Write an article..."
					onChange={(e) =>
						setBlogData((c) => ({ ...c, content: e.target.value }))
					}
				/>
				<Button className="mt-6">Publish</Button>
			</form>
		</div>
	);
}
