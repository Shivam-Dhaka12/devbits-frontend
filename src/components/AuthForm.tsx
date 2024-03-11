import { Link, useNavigate } from 'react-router-dom';
import { LabelledInput } from './LabelledInput';
import { useState } from 'react';
import { signupInput } from '@shivamdhaka/medium-common';
import { Button } from './Button';
import axios from 'axios';
import { BACKEND_URL } from '../../config.ts';
export function Form({ type }: { type: 'signin' | 'signup' }) {
	//
	const [postInputs, setPostInputs] = useState<signupInput>({
		name: '',
		email: '',
		password: '',
	});

	const navigate = useNavigate();

	async function sendRequest() {
		try {
			const url = `${BACKEND_URL}/api/v1/user/${
				type == 'signup' ? 'signup' : 'signin'
			}`;
			const response = await axios.post(url, postInputs);
			const jwt = response.data;
			localStorage.setItem('token', jwt);
			navigate('/blog/all');
		} catch (error) {
			alert('Error');
			console.error(error);
		}
	}
	return (
		<div className="h-screen flex justify-center flex-col items-center text-slate-800">
			<div className="max-w-xs w-4/5">
				<div className="px-2 text-center">
					<div className="max-w-md text-3xl font-bold">
						{type == 'signin'
							? 'Welcome back'
							: 'Create an account'}
					</div>
					<div className="text-slate-400 mt-1">
						{type == 'signin'
							? "Doesn't have an account?"
							: 'Already have an account?'}
						<Link
							to={type == 'signin' ? '/signup' : '/signin'}
							className="underline pl-2"
						>
							{type == 'signin' ? 'Signup' : 'Login'}
						</Link>
					</div>
				</div>

				<div className="w-full mt-8 ">
					{type === 'signup' && (
						<LabelledInput
							label="Name"
							placeholder="John Doe"
							onChange={(e) =>
								setPostInputs((c) => ({
									...c,
									name: e.target.value,
								}))
							}
						/>
					)}
					<LabelledInput
						label="Email"
						placeholder="john121@example.com"
						onChange={(e) =>
							setPostInputs((c) => ({
								...c,
								email: e.target.value,
							}))
						}
					/>
					<LabelledInput
						label="Password"
						placeholder="***********"
						type="password"
						onChange={(e) =>
							setPostInputs((c) => ({
								...c,
								password: e.target.value,
							}))
						}
					/>
					<Button className="mt-6 w-full" onClick={sendRequest}>
						{type === 'signin' ? 'Signin' : 'Signup'}
					</Button>
				</div>
			</div>
		</div>
	);
}
