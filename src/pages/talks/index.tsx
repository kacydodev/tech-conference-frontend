import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router';
import { Button } from '../../components/NewButton';
import { RadioButton } from '../../components/RadioButton';

function Talks() {
	// localhost:3000/schedule?speaker_id=sp_0&track_id=tr_0
	const [searchParams, setSearchParams] = useSearchParams();
	console.log('searchParams: ', Object.fromEntries(searchParams));

	const url = new URL('/api/v1/talks', import.meta.env.VITE_DATABASE_LOCAL);
	url.search = searchParams.toString();

	const { data } = useQuery({
		queryKey: ['talks', url],
		queryFn: async () => {
			const response = await fetch(url.toString());
			const data = await response.json();
			return data;
		},
	});

	return (
		<main>
			<section>
				<div>
					{/* <RadioButton>
						<RadioButton.Input name='day-1' />
						<RadioButton.Label htmlFor='day-1'>Day 1</RadioButton.Label>
					</RadioButton> */}

					<Button colors='white'>Day 1</Button>
				</div>
				{data?.map((talk) => (
					<article key={talk.id}>
						<p>{talk.title}</p>
					</article>
				))}
			</section>
		</main>
	);
}

export default Talks;
