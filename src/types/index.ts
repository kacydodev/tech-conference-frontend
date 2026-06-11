export interface Conference {
	id: number;
	name: string;
	brand_code: string;
	tagline: string | null;
	start_date: string | null;
	end_date: string | null;
	venue: string | null;
	city: string | null;
	city_abbreviation: string | null;
	state: string | null;
}

export interface Speaker {
	id: string;
	name: string;
	role: string;
	company: string;
	avatar: string;
	bio: string;
	featured: number;
}

export interface Track {
	id: string;
	name: string;
	description: string;
	color: string;
}

export interface Talk {
	id: string;
	title: string;
	speaker_id: string;
	day: number;
	track_id: string;
	start_time: string;
	end_time: string;
	location: string;
	description: string;
	highlighted: number;
}

export interface Keynote {
	name: string;
	role: string;
	company: string;
	avatar: string;
	title: string;
	start_time: string;
	day: number;
	location: string;
}

export type MainTalk = Pick<
	Talk,
	| 'id'
	| 'title'
	| 'description'
	| 'location'
	| 'day'
	| 'start_time'
	| 'end_time'
> &
	Pick<Speaker, 'name' | 'company'> &
	Omit<Track, 'id' | 'description'> & {
		track: string;
	};

export type TalkLinkType = Pick<
	Talk,
	| 'id'
	| 'title'
	| 'description'
	| 'location'
	| 'day'
	| 'start_time'
	| 'end_time'
> &
	Omit<Track, 'id' | 'description'> & {
		track: string;
	};

export type SpeakerProfileResponse = Pick<
	Speaker,
	'id' | 'name' | 'role' | 'company' | 'avatar' | 'bio'
> &
	Pick<Track, 'color'> & {
		talks: TalkLinkType[];
	};

export type SpeakerCardType = Omit<Speaker, 'bio' | 'featured'> &
	Pick<Talk, 'title'> &
	Pick<Track, 'color'>;
