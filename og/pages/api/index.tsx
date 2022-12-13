import { ImageResponse } from '@vercel/og';

export const config = {
	runtime: 'experimental-edge',
};

export default function handler() {
	return new ImageResponse(
		(
			<div tw='w-full h-full flex flex-col items-center justify-center text-4xl'>
				<div tw='flex'>test</div>
				<div tw='flex'><img src="https://github.com/contributte.png"/></div>
			</div>
		),
		{
			width: 1200,
			height: 600,
		}
	);
}
