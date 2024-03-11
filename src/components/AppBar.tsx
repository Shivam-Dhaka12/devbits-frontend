import { AvatarInitials } from './BlogCard';

export function AppBar() {
	return (
		<div className="shadow-sm flex justify-between px-10 py-4 sticky top-0 z-10 bg-white">
			<div>Medium</div>
			<AvatarInitials authorName="Shivam Dhaka" />
		</div>
	);
}
