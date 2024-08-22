import { Button } from '../components/Button';
import { BACKEND_URL } from '../../config';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useHttpRequest } from '../hooks';
import { toast } from 'react-toastify';
import { Spinner } from '../components/Spinner';
export function Publish() {
	const { isLoading, error, sendRequest } = useHttpRequest();
	const [blogData, setBlogData] = useState({
		title: '',
		content: '',
		published: true,
	});

	const navigate = useNavigate();
	async function sendPublishRequest(e: React.FormEvent) {
		e.preventDefault();
		const url = `${BACKEND_URL}/api/v1/blog`;
		try {
			const response = await sendRequest({
				method: 'post',
				url,
				data: blogData,
			});
			console.log(response);
			if (response.status >= 200 && response.status < 300) {
				toast.success('Published Successfully');
				navigate('/user/blogs');
			} else {
				toast.error('Something went wrong');
			}
		} catch (e) {
			toast.error(error);
		}

		navigate('/user/blogs');
	}
	return (
		<div className="flex justify-center w-full px-16">
			<form
				className="max-w-4xl my-10 w-full"
				onSubmit={(e) => sendPublishRequest(e)}
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
				<Button className="mt-6 w-32">
					{isLoading ? <Spinner className="w-4 h-4" /> : 'Publish'}
				</Button>
			</form>
		</div>
	);
}
