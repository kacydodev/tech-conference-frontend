import Keynote from './Keynote';
import TitleCard from './TitleCard';

function HeroSection() {
	return (
		<section id='hero-section' className='flex flex-col lg:flex-row'>
			<TitleCard />
			<Keynote />
		</section>
	);
}

export default HeroSection;
