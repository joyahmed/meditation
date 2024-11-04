import AppGradient from '@/components/app-gradient';
import BackButton from '@/components/back-button';
import CustomButton from '@/components/custom-button';
import MEDITATION_IMAGES from '@/constants/meditation-images';
import { useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { ImageBackground, Text, View } from 'react-native';

const Meditate = () => {
	const { id } = useLocalSearchParams();
	const [secondsRemaining, setSecondsRemaining] = useState(10);
	const [isMeditating, setIsMeditating] = useState(false);

	useEffect(() => {
		let timerId: NodeJS.Timeout;
		if (secondsRemaining === 0) {
			return;
		}
		if (isMeditating) {
			timerId = setTimeout(() => {
				setSecondsRemaining(secondsRemaining - 1);
			}, 1000);
		}

		return () => {
			clearTimeout(timerId);
		};
	}, [secondsRemaining, isMeditating]);

	const formattedTimeMinutes = String(
		Math.floor(secondsRemaining / 60)
	).padStart(2, '0');

	const formattedSeconds = String(secondsRemaining % 60).padStart(
		2,
		'0'
	);
	return (
		<View className='flex-1'>
			<ImageBackground
				source={MEDITATION_IMAGES[Number(id) - 1]}
				resizeMode='cover'
				className='flex-1'
			>
				<AppGradient colors={['transparent', 'rgba(0, 0, 0, 0.8)']}>
					<BackButton />

					<View className='flex-1 justify-center'>
						<View className='items-center justify-center mx-auto bg-gray-200/80 backdrop-blur-sm rounded-full w-40 aspect-square shadow-inner'>
							<Text className='text-4xl text-sky-700 font-semibold'>
								{formattedTimeMinutes}:{formattedSeconds}
							</Text>
						</View>
					</View>
					<View className='mb-5'>
						<CustomButton
							{...{
								title: 'Start Meditation',
								onClick: () => setIsMeditating(true)
							}}
						/>
					</View>
				</AppGradient>
			</ImageBackground>

			<StatusBar style='light' />
		</View>
	);
};

export default Meditate;
