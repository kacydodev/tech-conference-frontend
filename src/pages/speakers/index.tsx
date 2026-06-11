import { useQuery } from '@tanstack/react-query';
import type { SpeakerCardType } from '../../types';
import { SpeakerCard } from '../../components/SpeakerCard';
import { Outlet, useLocation } from 'react-router';
import { Subtitle, Title } from '../../components/Typography';
import { trackColors } from '../../utils';

type SpeakersResponseType = SpeakerCardType[];

function Speakers() {
	const location = useLocation();

	const url = new URL('/api/v0/speakers', import.meta.env.VITE_DATABASE_LOCAL);

	const { data } = useQuery({
		queryKey: ['speakers', url],
		queryFn: async () => {
			const response = await fetch(url.toString());
			const data: SpeakersResponseType = await response.json();
			return data;
		},
	});

	return (
		<main>
			<section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
				{data?.map((speaker) => {
					const { id, name, role, company, avatar, title, color } = speaker;
					const backgroundClass =
						trackColors.find((item) => item.hex === color)?.background ||
						'bg-debug';
					return (
						<SpeakerCard
							key={id}
							to={`${id}`}
							state={{ background: location, color: color }}>
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
			</section>
			<section>
				<Outlet />
			</section>
		</main>
	);
}

export default Speakers;
