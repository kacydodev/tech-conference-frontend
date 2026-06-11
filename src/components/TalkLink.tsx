import type { MainTalk } from '../types';
import { trackColors } from '../utils';
import { Subtitle, Title } from './Typography';

function TalkLink({ props }: { props: MainTalk }) {
	const {
		title,
		location,
		day,
		start_time,
		end_time,
		name,
		company,
		track,
		color,
	} = props;

	const trackClass = trackColors.find((object) => object.hex === color);

	return (
		<div className='md:grid md:grid-cols-[3rem_auto_8em]'>
			<div className='relative flex items-center justify-center overflow-clip'>
				<p
					className={`md:-rotate-90 md:origin-center ${trackClass?.text || 'text-debug'}`}>
					{track}
				</p>
			</div>
			<div className={`text-black ${trackClass?.background || 'bg-debug'}`}>
				<Title>{title}</Title>
				<Subtitle className=''>
					{name} @ {company}
				</Subtitle>
			</div>
			<div
				className={`border-t md:border-l md:border-t-0 border-dashed boder-black text-black ${trackClass?.background || 'bg-debug'}`}>
				<p>
					Day {day}, {location}
				</p>
				<p>
					{start_time} - {end_time}
				</p>
			</div>
		</div>
	);
}

export default TalkLink;
