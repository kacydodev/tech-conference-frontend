import { Collapsible } from 'radix-ui';
import type { MainTalk } from '../types';
import { Button } from './NewButton';
import { useState } from 'react';
import { Subtitle, Title } from './Typography';
import { trackColors } from '../utils';

function TalkCard({ item }: { item: MainTalk }) {
	const {
		title,
		description,
		location,
		day,
		start_time,
		end_time,
		name,
		company,
		track,
		color,
	} = item;
	const [isOpen, setOpen] = useState(false);

	const triggerLabel = isOpen ? 'View less' : 'View more';
	const triggerClass = isOpen ? 'flex-col-reverse' : 'flex-col';

	const trackClass = trackColors.find((object) => object.hex === color);

	return (
		<div className='grid grid-cols-[auto_1fr_auto]'>
			<p
				// className={`md:[writing-mode:sideways-lr] ${trackClass?.text || 'text-debug'}`}>
				className={`-rotate-90 ${trackClass?.text || 'text-debug'}`}>
				{track}
			</p>
			<div className={`text-black ${trackClass?.background || 'bg-debug'}`}>
				<Title>{title}</Title>
				<Subtitle className=''>
					{name} {company}
				</Subtitle>
				<Collapsible.Root open={isOpen}>
					<div className={`flex ${triggerClass}`}>
						<Collapsible.Trigger asChild>
							<Button
								variants='link'
								onClick={() => setOpen(!isOpen)}
								className='self-start'>
								{triggerLabel}
								{}
							</Button>
						</Collapsible.Trigger>
						<Collapsible.Content className='CollapsibleContent'>
							<p>{description}</p>
							<p>{location}</p>
						</Collapsible.Content>
					</div>
				</Collapsible.Root>
			</div>
			<div className={`text-black ${trackClass?.background || 'bg-debug'}`}>
				<p>Day {day}</p>
				<p>
					{start_time} - {end_time}
				</p>
			</div>
		</div>
	);
}

export default TalkCard;
