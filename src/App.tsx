import { BrowserRouter } from 'react-router-dom';

import { AppBar } from './components/AppBar';
import { RecoilRoot } from 'recoil';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Zoom } from 'react-toastify';
import { AppRoutes } from './routes';

function App() {
	return (
		<RecoilRoot>
			<BrowserRouter>
				<AppBar />
				<AppRoutes />
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
