import { useQuery } from '@tanstack/react-query';
import type { Conference } from '../../../types';
import { HeroHeader } from '../../../components/Typography';

function TitleCard() {
	const url = new URL(
		'/api/v1/conference',
		import.meta.env.VITE_DATABASE_LOCAL,
	);

	const { data, isLoading, error } = useQuery({
		queryKey: ['conference', url],
		queryFn: async () => {
			const response = await fetch(url.toString());
			const conference: Conference = await response.json();
			return conference;
		},
	});

	if (error) {
		return <p>Error fetching data</p>;
	}

	if (isLoading) {
		return <p>Loading...</p>;
	}

	return (
		<article className='grow bg-neutral-100 text-black'>
			<HeroHeader>{data?.tagline}</HeroHeader>
			<div className='flex border-t border-black'>
				<p className='grow'>{data?.start_date}</p>
				<p>
					{data?.venue}, {data?.city_abbreviation}
				</p>
			</div>
		</article>
	);
}

export default TitleCard;
