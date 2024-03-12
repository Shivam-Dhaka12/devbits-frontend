import { Link } from 'react-router-dom';
import { AvatarInitials } from './BlogCard';

export function AppBar() {
	return (
		<div className="shadow-sm flex justify-between px-10 py-3 sticky top-0 z-10 bg-white items-center">
			<Link to={'/blogs'}>
				<div className="cursor-pointer font-semibold text-2xl tracking-tighter">
					Medium
				</div>
			</Link>

			<div className="flex items-center">
				<Link to={'/publish'}>
					<button
						type="button"
						className="focus:outline-none text-white  focus:ring-4  font-medium rounded-full text-sm px-4 py-1.5 mr-2 bg-green-600 hover:bg-green-700 focus:ring-green-800"
					>
						New
					</button>
				</Link>

				<AvatarInitials authorName="Shivam Dhaka" size="lg" />
			</div>
		</div>
	);
}

export function TextEditor() {
	return <div>Text Editor</div>;
}
