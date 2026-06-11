import { useQuery } from '@tanstack/react-query';
import type { SpeakerCardType } from '../../../types';
import { SectionHeader, Subtitle, Title } from '../../../components/Typography';
import { SpeakerCard } from '../../../components/SpeakerCard';
import { Button } from '../../../components/NewButton';
import { trackColors } from '../../../utils';
import { useLocation } from 'react-router';

function SpeakersSection() {
	const location = useLocation();

	const url = new URL(
		'/api/v0/main-speakers',
		import.meta.env.VITE_DATABASE_LOCAL,
	);

	const { data } = useQuery({
		queryKey: ['main-speakers', url],
		queryFn: async () => {
			const response = await fetch(url.toString());
			const data: SpeakerCardType[] = await response.json();
			return data;
		},
	});

	return (
		<section id='speakers-section'>
			<SectionHeader>Featured_Speakers</SectionHeader>
			<article className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
				{/* {data?.map(({ index, id, avatar, name, role, company, title }) => { */}
				{data?.map((speaker) => {
					const { id, avatar, name, role, company, title, color } = speaker;
					const backgroundClass =
						trackColors.find((item) => item.hex === color)?.background ||
						'bg-debug';

					return (
						<SpeakerCard
							key={id}
							to={`speakers/${id}`}
							state={{ background: location }}>
							<img
								src={avatar.slice(1)}
								alt={`profile picture of ${name}`}
								className={backgroundClass}
							/>
							<Title>{name}</Title>
							<Subtitle>
								{role} @ {company}
							</Subtitle>
							<Subtitle>{title}</Subtitle>
						</SpeakerCard>
					);
				})}
			</article>
			<Button colors='white'>See all speakers</Button>
		</section>
	);
}

export default SpeakersSection;
