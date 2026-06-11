import { useQuery } from '@tanstack/react-query';
import { SectionHeader, Subtitle, Title } from '../../../components/Typography';
import type { Track } from '../../../types';
import { trackColors } from '../../../utils';

function TracksSection() {
	const url = new URL(
		'/api/v1/main-tracks',
		import.meta.env.VITE_DATABASE_REMOTE,
	);

	const { data, isLoading, error } = useQuery({
		queryKey: ['main-tracks', url],
		queryFn: async () => {
			const response = await fetch(url.toString());
			const mainTrack: Track[] = await response.json();
			return mainTrack;
		},
	});

	if (error) {
		return <p>Error fetching data</p>;
	}

	if (isLoading) {
		return <p>Loading...</p>;
	}

	return (
		<section id='tracks-section'>
			<SectionHeader>Tracks</SectionHeader>
			<article className='grid grid-cols-1 md:grid-cols-2 grid-rows-2'>
				{/* {data?.map((track: Track, index: number) => {
					const { id, name, description } = track;
					const colors = [
						'text-yellow-100',
						'text-red-100',
						'text-cyan-100',
						'text-purple-100',
					];
					return (
						<div key={id}>
							<Title className={colors[index]}>{name}</Title>
							<Subtitle>{description}</Subtitle>
						</div>
					);
				})} */}
				{data?.map(({ id, name, description, color }) => {
					const colorClass =
						trackColors.find((object) => object.hex === color)?.text ||
						'text-debug';
					return (
						<div key={id}>
							<Title className={colorClass}>{name}</Title>
							<Subtitle>{description}</Subtitle>
						</div>
					);
				})}
			</article>
		</section>
	);
}

export default TracksSection;
