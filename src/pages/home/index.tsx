import { Outlet } from 'react-router';
import HeroSection from './heroSection';
import SpeakersSection from './speakersSection';
import TalksSection from './talksSection';
import TracksSection from './tracksSection';

function Home() {
	return (
		<main className='relative'>
			<HeroSection />
			<TracksSection />
			<SpeakersSection />
			<TalksSection />
			<Outlet />
		</main>
	);
}

export default Home;
