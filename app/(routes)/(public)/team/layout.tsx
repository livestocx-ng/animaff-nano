import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Nano - Our Team',
	description: 'Revolutionizing livestock cooling with nanotechnology — no electricity required. Protecting animals, reducing losses, and improving farm productivity with passive radiative cooling and phase-change materials.',
	keywords: [
		'Nano',
		'Nanotechnology',
		'Livestock Farms',
		'Radiative Cooling',
		'Nanoparticles',
		'Phase-change Materials',
		'Temperature Regulation',
		'Heat Stress Reduction',
	],
	openGraph: {
		title: 'Nano - Our Team',
		description: 'Revolutionizing livestock cooling with nanotechnology — no electricity required. Protecting animals, reducing losses, and improving farm productivity with passive radiative cooling and phase-change materials.',
		url: 'https://nano.animaff.com',
		siteName: 'Nano',
		type: 'website',
		images: [
			{
				url: 'https://animaff-media.s3.amazonaws.com/public/animaff-thumbnail-300x200.png',
				secureUrl:
					'https://animaff-media.s3.amazonaws.com/public/animaff-thumbnail-300x200.png',
				width: 300,
				height: 200,
			},
			{
				url: 'https://animaff-media.s3.amazonaws.com/public/animaff-thumbnail-300x300.png',
				secureUrl:
					'https://animaff-media.s3.amazonaws.com/public/animaff-thumbnail-300x300.png',
				width: 300,
				height: 300,
			},
			{
				url: 'https://animaff-media.s3.amazonaws.com/public/animaff-thumbnail-1200x630.png',
				secureUrl:
					'https://animaff-media.s3.amazonaws.com/public/animaff-thumbnail-1200x630.png',
				alt: 'Nano Banner',
				width: 1200,
				height: 630,
			},
			{
				url: 'https://animaff-media.s3.amazonaws.com/public/animaff-thumbnail-1200x630.png',
				secureUrl:
					'https://animaff-media.s3.amazonaws.com/public/animaff-thumbnail-1200x630.png',
				alt: 'Nano Banner',
			},
		],
	},
	twitter: {
		card: 'summary',
		site: '@livestocx',
		creator: '@livestocx',
		title: 'Nano - Our Team',
		description: 'Revolutionizing livestock cooling with nanotechnology — no electricity required. Protecting animals, reducing losses, and improving farm productivity with passive radiative cooling and phase-change materials.',
		images: [
			{
				url: 'https://animaff-media.s3.amazonaws.com/public/animaff-thumbnail-300x200.png',
				secureUrl:
					'https://animaff-media.s3.amazonaws.com/public/animaff-thumbnail-300x200.png',
				width: 300,
				height: 200,
			},
			{
				url: 'https://animaff-media.s3.amazonaws.com/public/animaff-thumbnail-300x300.png',
				secureUrl:
					'https://animaff-media.s3.amazonaws.com/public/animaff-thumbnail-300x300.png',
				width: 300,
				height: 300,
			},
			{
				url: 'https://animaff-media.s3.amazonaws.com/public/animaff-thumbnail-1200x630.png',
				secureUrl:
					'https://animaff-media.s3.amazonaws.com/public/animaff-thumbnail-1200x630.png',
				alt: 'Nano Banner',
				width: 1200,
				height: 630,
			},
			{
				url: 'https://animaff-media.s3.amazonaws.com/public/animaff-thumbnail-1200x630.png',
				secureUrl:
					'https://animaff-media.s3.amazonaws.com/public/animaff-thumbnail-1200x630.png',
				alt: 'Nano Banner',
			},
		],
	},
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
