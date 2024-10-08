import { Link, useNavigate } from 'react-router-dom';
import { LabelledInput } from './LabelledInput';
import { FormEvent, useState } from 'react';
import { signupInput } from '@shivamdhaka/medium-common';
import { Button } from './Button';
import { BACKEND_URL } from '../../config.ts';
import { authState } from '../atoms/authState';
import { useSetRecoilState } from 'recoil';
import { useHttpRequest } from '../hooks/index.tsx';
import { toast } from 'react-toastify';
import { Spinner } from './Spinner.tsx';

export function Form({ type }: { type: 'signin' | 'signup' }) {
	const setAuthState = useSetRecoilState(authState);
	const { error, sendRequest } = useHttpRequest();

	const [isSignInLoading, setIsSignInLoading] = useState(false);
	const [isGuestSignInLoading, setIsGuestSignInLoading] = useState(false);
	//
	const [postInputs, setPostInputs] = useState<signupInput>({
		name: '',
		email: '',
		password: '',
	});

	const navigate = useNavigate();

	async function sendAuthRequest(postInputs: signupInput) {
		console.log(BACKEND_URL);
		const url = `${BACKEND_URL}/api/v1/user/${
			type == 'signup' ? 'signup' : 'signin'
		}`;
		try {
			const response = await sendRequest({
				method: 'post',
				url,
				data: postInputs,
			});
			console.log(response);
			if (response.status >= 200 && response.status < 300) {
				setAuthState((prevState) => ({
					...prevState,
					isLoggedIn: true,
					userId: response.data?.id || null,
					username: response.data?.username || null,
				}));
				toast.success('Logged in successfully');
				navigate('/user/blogs');
			} else {
				toast.error('Something went wrong');
			}
		} catch (e) {
			toast.error(error);
		} finally {
			setIsSignInLoading(false);
			setIsGuestSignInLoading(false);
		}
	}

	async function handleSignin(e: FormEvent) {
		e.preventDefault();
		setIsGuestSignInLoading(true);
		await sendAuthRequest(postInputs);
	}

	async function handleGuestSignin() {
		setIsGuestSignInLoading(true);
		const guestInputs: signupInput = {
			email: 'guest@example.com',
			name: 'Guest User',
			password: 'guest1234',
		};
		await sendAuthRequest(guestInputs);
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

				<form
					className="w-full mt-8"
					onSubmit={(e: React.FormEvent) => handleSignin(e)}
				>
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
						type="email"
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
					<Button className="mt-6 w-full">
						{isSignInLoading ? (
							<Spinner className="w-6 h-6" />
						) : type === 'signin' ? (
							'Signin'
						) : (
							'Signup'
						)}
					</Button>
					{type == 'signin' && (
						<Button
							className="mt-2 w-full bg-slate-100"
							color="white"
							type="button"
							onClick={handleGuestSignin}
						>
							{isGuestSignInLoading ? (
								<Spinner className="w-6 h-6" />
							) : (
								'Signin as Guest'
							)}
						</Button>
					)}
				</form>
			</div>
		</div>
	);
}
