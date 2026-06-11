import { useNavigate, useParams } from 'react-router';
import type { SpeakerProfileResponse } from '../../types';
import { useQuery } from '@tanstack/react-query';
import { SectionHeader, Subtitle, Title } from '../../components/Typography';
import { useEffect } from 'react';
import { Button } from '../../components/NewButton';
import { XIcon } from '@phosphor-icons/react';
import TalkLink from '../../components/TalkLink';
import { trackColors } from '../../utils';

function SpeakerProfile() {
	const { id } = useParams();
	const navigate = useNavigate();

	// Disable scroll on Popup
	useEffect(() => {
		if (id) {
			document.body.style.overflow = 'hidden';
		}
		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [id]);

	const url = new URL(
		'/api/v1/speaker/' + id,
		import.meta.env.VITE_DATABASE_REMOTE,
	);

	const { data } = useQuery({
		queryKey: ['speaker-profile', url],
		queryFn: async () => {
			const response = await fetch(url.toString());
			const data = await response.json();
			const talksClean = await JSON.parse(data.talks);
			const newData: SpeakerProfileResponse = { ...data, talks: talksClean };
			return newData;
		},
	});

	const backgroundClass =
		trackColors.find((item) => item.hex === data?.color)?.background ||
		'bg-debug';

	function handleOnClick() {
		navigate(-1);
	}

	// return (
	// 	<div className='fixed inset-0 flex items-center justify-center w-screen h-dvh overflow-hidden'>
	// 		<section className='debug absolute w-full md:max-w-2xl bg-neutral-600 z-2'>
	// 			<pre>{JSON.stringify(data, null, 2)}</pre>
	// 		</section>
	// 	</div>
	// );

	return (
		<div className='fixed inset-0 flex items-center justify-center w-screen h-dvh overflow-hidden'>
			<div
				onClick={handleOnClick}
				className='overlay absolute inset-0 w-full h-full bg-neutral-900/80 z-1'></div>
			<section className='absolute w-full md:max-w-2xl bg-neutral-600 z-2'>
				<article>
					<Button colors='white' onClick={handleOnClick}>
						<XIcon size={24} />
					</Button>
					<img src={data?.avatar.slice(1)} className={backgroundClass} />
					<Title>{data?.name}</Title>
					<Subtitle>
						{data?.role} @ {data?.company}
					</Subtitle>
					<p>{data?.bio}</p>
				</article>

				{/* talks */}
				<SectionHeader>Talks</SectionHeader>
				<article className='grid auto-rows-fr'>
					{data?.talks.map((talk) => (
						<TalkLink
							key={talk.id}
							props={{ company: data.company, ...talk }}
						/>
					))}
				</article>
			</section>
		</div>
	);
}

export default SpeakerProfile;
