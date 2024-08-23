import { useState } from 'react';
import { AvatarInitials } from '../components/BlogCard';
import { authState } from '../atoms/authState';
import { useRecoilState } from 'recoil';
import { Button } from '../components/Button';
import { Spinner } from '../components/Spinner';

// Mock user data (in a real app, this would come from your authentication system)
const initialUser = {
	username: 'johndoe',
	email: 'johndoe@example.com',
	avatarUrl: 'https://i.pravatar.cc/150?u=johndoe@example.com',
	bio: "I'm a passionate blogger and tech enthusiast.",
};

export function Profile() {
	const [user, setUser] = useState(initialUser);
	const [auth, setAuth] = useRecoilState(authState);
	const [isEditing, setIsEditing] = useState(false);
	const [editedUser, setEditedUser] = useState(user);
	const [isLoggingOut, setIsLoggingOut] = useState(false);

	const handleEdit = () => {
		setIsEditing(true);
		setEditedUser(user);
	};

	const handleSave = () => {
		setUser(editedUser);
		setIsEditing(false);
		// Here you would typically send the updated user data to your backend
		console.log('Saving changes:', editedUser);
	};

	const handleCancel = () => {
		setIsEditing(false);
		setEditedUser(user);
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setEditedUser((prev) => ({ ...prev, [name]: value }));
	};

	const handleLogout = () => {
		setIsLoggingOut(true);
		// Implement logout logic here
		console.log('Logging out...');
		// Simulate logout process
		setTimeout(() => setIsLoggingOut(false), 1000);
	};

	return (
		<div className="flex items-center justify-center h-[calc(100vh-4rem)] bg-gray-100">
			<div className="bg-white shadow-md rounded-lg w-full max-w-md overflow-hidden m-4">
				<div className="px-6 py-4">
					<div className="flex justify-between items-center mb-4">
						<div className="cursor-pointer font-semibold text-2xl tracking-tighter">
							Profile
						</div>
						{!isEditing && (
							<button
								onClick={handleEdit}
								className="flex items-center text-gray-500 hover:text-gray-600 focus:outline-none focus:underline"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5 mr-1"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
								</svg>
								Edit
							</button>
						)}
					</div>
					<div className="flex justify-center mb-6">
						<AvatarInitials
							authorName={auth.username || 'Test'}
							size="xl"
						/>
					</div>
					<div className="space-y-4">
						<div className="flex items-center space-x-4">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 text-gray-400"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
									clipRule="evenodd"
								/>
							</svg>
							<div className="flex-grow">
								<p className="text-sm font-medium text-gray-500">
									Username
								</p>
								{isEditing ? (
									<input
										type="text"
										name="username"
										value={editedUser.username}
										onChange={handleChange}
										className="w-full text-sm text-gray-800 border-b border-gray-300 focus:outline-none focus:border-blue-500"
									/>
								) : (
									<p className="text-sm text-gray-800">
										{user.username}
									</p>
								)}
							</div>
						</div>
						<div className="flex items-center space-x-4">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 text-gray-400"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
								<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
							</svg>
							<div className="flex-grow">
								<p className="text-sm font-medium text-gray-500">
									Email
								</p>
								{isEditing ? (
									<input
										type="email"
										name="email"
										value={editedUser.email}
										onChange={handleChange}
										className="w-full text-sm text-gray-800 border-b border-gray-300 focus:outline-none focus:border-blue-500"
									/>
								) : (
									<p className="text-sm text-gray-800">
										{user.email}
									</p>
								)}
							</div>
						</div>
						<div className="flex items-start space-x-4">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 text-gray-400"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
									clipRule="evenodd"
								/>
							</svg>
							<div className="flex-grow">
								<p className="text-sm font-medium text-gray-500">
									Bio
								</p>
								{isEditing ? (
									<textarea
										name="bio"
										value={editedUser.bio}
										onChange={handleChange}
										rows={3}
										className="w-full text-sm text-gray-800 border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500"
									/>
								) : (
									<p className="text-sm text-gray-800">
										{user.bio}
									</p>
								)}
							</div>
						</div>
					</div>
					{isEditing && (
						<div className="mt-6 space-y-2">
							<button
								onClick={handleSave}
								className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
							>
								Save Changes
							</button>
							<button
								onClick={handleCancel}
								className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
							>
								Cancel
							</button>
						</div>
					)}
				</div>
				{!isEditing && (
					<div className="px-6 py-4 bg-gray-50">
						<Button
							className="w-full"
							onClick={handleLogout}
							disabled={isLoggingOut}
						>
							{isLoggingOut ? (
								<Spinner className="w-6 h-6" />
							) : (
								<>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5 inline-block mr-2 -mt-1"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
											clipRule="evenodd"
										/>
									</svg>
									Logout
								</>
							)}
						</Button>
					</div>
				)}
			</div>
		</div>
	);
}
