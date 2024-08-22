import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { Signin } from './pages/Signin';
import { Signup } from './pages/Signup';
import { Blog } from './pages/Blog';
import { Blogs } from './pages/Blogs';
import { Publish } from './pages/Publish';
import { authState } from './atoms/authState';
import { useRecoilValue } from 'recoil';

export function AppRoutes() {
	const auth = useRecoilValue(authState);
	return (
		<Routes>
			<Route
				path="/signin"
				element={
					auth.isLoggedIn ? (
						<Navigate to="/user/blogs" replace />
					) : (
						<Signin />
					)
				}
			/>
			<Route
				path="/signup"
				element={
					auth.isLoggedIn ? (
						<Navigate to="/user/blogs" replace />
					) : (
						<Signup />
					)
				}
			/>
			<Route
				path="/user"
				element={
					auth.isLoggedIn ? (
						<Outlet />
					) : (
						<Navigate to="/signin" replace />
					)
				}
				children={[
					<Route key="blog/:id" path="blog/:id" element={<Blog />} />,
					<Route key="blogs" path="blogs" element={<Blogs />} />,
					<Route
						key="publish"
						path="publish"
						element={<Publish />}
					/>,
				].filter(Boolean)}
			></Route>
		</Routes>
	);
}
