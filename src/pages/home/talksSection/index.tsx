import { SectionHeader } from '../../../components/Typography';
import type { MainTalk } from '../../../types';
import TalkCard from '../../../components/TalkCard';
import { useQuery } from '@tanstack/react-query';
import './styles.css';
import { Button } from '../../../components/NewButton';
import { Link } from 'react-router';

function TalksSection() {
	const url = new URL(
		'/api/v1/main-talks',
		import.meta.env.VITE_DATABASE_REMOTE,
	);

	const { data, isLoading, error } = useQuery({
		queryKey: ['main-talks', url],
		queryFn: async () => {
			const response = await fetch(url.toString());
			const data: MainTalk[] = await response.json();
			return data;
		},
	});

	if (error) {
		return <p>Error fetching data</p>;
	}

	if (isLoading) {
		return <p>Loading...</p>;
	}

	return (
		<section id='talks-section'>
			<SectionHeader>Schedule_Highlights</SectionHeader>
			<article>
				{data?.map((item: MainTalk) => (
					<TalkCard key={item.id} item={item} />
				))}
			</article>
			<Link to='/schedule'>
				<Button colors='white'>See Full Schedule</Button>
			</Link>
		</section>
	);
}

export default TalksSection;
