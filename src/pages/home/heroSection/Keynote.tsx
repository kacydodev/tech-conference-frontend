import { useQuery } from '@tanstack/react-query';
import type { Keynote as KeynoteType } from '../../../types';
import { SectionHeader, Title } from '../../../components/Typography';
import { Button } from '../../../components/NewButton';

function Keynote() {
	const url = new URL('/api/v0/keynote', import.meta.env.VITE_DATABASE_LOCAL);

	const { data, isLoading, error } = useQuery({
		queryKey: ['keynote', url],
		queryFn: async () => {
			const response = await fetch(url.toString());
			const keynote: KeynoteType = await response.json();
			return keynote;
		},
	});

	if (error) {
		return <p>Error fetching data</p>;
	}

	if (isLoading) {
		return <p>Loading...</p>;
	}

	return (
		<article className='flex flex-row-reverse justify-end bg-purple-100 text-black'>
			<img
				src={data?.avatar.slice(1)}
				alt={`profile picture of ${data?.name}`}
				className='hidden md:block w-auto h-80'
			/>
			<div className='flex flex-col justify-between'>
				<SectionHeader className='font-normal!'>Keynote</SectionHeader>
				<div>
					<Title>{data?.name}</Title>
					<p>{data?.role}</p>
					<p>{data?.company}</p>
				</div>
				<div>
					<p>{data?.title}</p>
					<p>
						{data?.day} {data?.start_time} {data?.location}
					</p>
				</div>
				<Button>Click here</Button>
			</div>
		</article>
	);
}

export default Keynote;
