export interface MeditationType {
	id: number;
	title: string;
	image: string;
	audio: string;
}

export const MEDITATION_DATA: MeditationType[] = [
	{
		id: 1,
		title: 'Mountains',
		image: '@/assets/meditation-images/trees.webp',
		audio: 'trees.mp3'
	},
	{
		id: 2,
		title: 'Rivers',
		image: '@/assets/meditation-images/river.webp',
		audio: 'river.mp3'
	},
	{
		id: 3,
		title: 'Sunset',
		image: '@/assets/meditation-images/meditate-under-tree.webp',
		audio: 'meditate-under-tree.mp3'
	},
	{
		id: 4,
		title: 'Beaches',
		image: '@/assets/meditation-images/meditation-bg.webp',
		audio: 'beach.mp3'
	},
	{
		id: 5,
		title: 'Starry Night',
		image: '@/assets/meditation-images/yosemite-stars.webp',
		audio: 'yosemite-stars.mp3'
	},
	{
		id: 6,
		title: 'Waterfall',
		image: '@/assets/meditation-images/waterfall.webp',
		audio: 'waterfall.mp3'
	}
];

export const AUDIO_FILES: { [key: string]: any } = {
	'trees.mp3': require('@/assets/audio/trees.mp3'),
	'river.mp3': require('@/assets/audio/river.mp3'),
	'meditate-under-tree.mp3': require('@/assets/audio/meditate-under-tree.mp3'),
	'beach.mp3': require('@/assets/audio/beach.mp3'),
	'yosemite-stars.mp3': require('@/assets/audio/yosemite-stars.mp3'),
	'waterfall.mp3': require('@/assets/audio/waterfall.mp3')
};
