import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Signin } from './pages/Signin';
import { Signup } from './pages/Signup';
import { Blog } from './pages/Blog';
import { Blogs } from './pages/Blogs';
import { Publish } from './pages/Publish';
import { AppBar } from './components/AppBar';
import { RecoilRoot } from 'recoil';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Zoom } from 'react-toastify';

function App() {
	const notify = () =>
		toast.info('Info Notification !', {
			position: 'bottom-right',
			draggable: true,
			theme: 'light',
			transition: Zoom,
		});

	return (
		<RecoilRoot>
			<BrowserRouter>
				<AppBar />
				<Routes>
					<Route path="/signin" element={<Signin />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/blog/:id" element={<Blog />} />
					<Route path="/blogs" element={<Blogs />} />
					<Route path="/publish" element={<Publish />} />
				</Routes>
				<ToastContainer
					position="top-right"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss={false}
					draggable
					pauseOnHover
					theme="light"
					transition={Zoom}
					closeButton={true}
				/>
			</BrowserRouter>
		</RecoilRoot>
	);
}

export default App;
