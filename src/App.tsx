import { Route, Routes, useLocation } from 'react-router';
import NotFound from './pages/NotFound';
import Layout from './pages/Layout';
import Home from './pages/home';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import SpeakerProfile from './pages/speaker';
import Speakers from './pages/speakers';
import Talks from './pages/talks';

function App() {
	const queryClient = new QueryClient();
	const location = useLocation();
	const background = location.state && location.state.background;

	return (
		<QueryClientProvider client={queryClient}>
			<Routes location={background || location}>
				<Route element={<Layout />}>
					{/* <Route index element={<Home />} /> */}
					<Route path='/' element={<Home />} />
					<Route path='schedule' element={<Talks />} />
					<Route path='speakers' element={<Speakers />} />
				</Route>

				{/* Catch-All Route (Matches any undefined URLs for 404 pages) */}
				<Route path='*' element={<NotFound />} />
			</Routes>

			{background && (
				<Routes>
					<Route path='speakers/:id' element={<SpeakerProfile />} />
				</Routes>
			)}
		</QueryClientProvider>
	);
}

export default App;
