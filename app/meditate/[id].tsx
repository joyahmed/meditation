import AppGradient from '@/components/app-gradient';
import BackButton from '@/components/back-button';
import CustomButton from '@/components/custom-button';
import {
	AUDIO_FILES,
	MEDITATION_DATA
} from '@/constants/meditation-data';
import MEDITATION_IMAGES from '@/constants/meditation-images';
import { TimerContext } from '@/store/timer-context';
import { Audio } from 'expo-av';
import { router, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useContext, useEffect, useState } from 'react';
import { ImageBackground, Text, View } from 'react-native';

const Meditate = () => {
	const { id } = useLocalSearchParams();
	const { duration: secondsRemaining, setDuration } =
		useContext(TimerContext);
	const [isMeditating, setIsMeditating] = useState(false);
	const [audio, setAudio] = useState<Audio.Sound>();
	const [isPlayingAudio, setisPlayingAudio] = useState(false);

	useEffect(() => {
		let timerId: NodeJS.Timeout;
		if (secondsRemaining === 0) {
			if (isPlayingAudio) audio?.pauseAsync();
			setIsMeditating(false);
			setisPlayingAudio(false);
			return;
		}
		if (isMeditating) {
			timerId = setTimeout(() => {
				setDuration(secondsRemaining - 1);
			}, 1000);
		}

		return () => {
			clearTimeout(timerId);
		};
	}, [secondsRemaining, isMeditating]);

	useEffect(() => {
		return () => {
			audio?.unloadAsync();
		};
	}, [audio]);

	const toggleMeditationSessionStatus = async () => {
		//if (secondsRemaining === 0) setDuration(10);
		setIsMeditating(!isMeditating);

		await toggleSound();
	};

	const toggleSound = async () => {
		const sound = audio ? audio : await initializeSound();

		const status = await sound?.getStatusAsync();

		if (
			status?.isLoaded &&
			!isPlayingAudio &&
			secondsRemaining !== 0
		) {
			await sound.playAsync();
			setisPlayingAudio(true);
		} else {
			await sound.pauseAsync();
			setisPlayingAudio(false);
		}
	};

	const initializeSound = async () => {
		const audioFileName = MEDITATION_DATA[Number(id) - 1].audio;

		const { sound } = await Audio.Sound.createAsync(
			AUDIO_FILES[audioFileName]
		);

		setAudio(sound);
		return sound;
	};

	const handleAdjustDuration = () => {
		if (isMeditating) toggleMeditationSessionStatus();
		router.push('/(modal)/adjust-duration');
	};

	const formattedTimeMinutes = String(
		Math.floor(secondsRemaining / 60)
	).padStart(2, '0');

	const formattedTimeSeconds = String(secondsRemaining % 60).padStart(
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
								{formattedTimeMinutes}:{formattedTimeSeconds}
							</Text>
						</View>
					</View>
					<View className='mb-5 space-y-3'>
						<CustomButton
							title='Adjust duration'
							onClick={handleAdjustDuration}
						/>
						<CustomButton
							title={isMeditating ? 'Stop' : 'Start Meditation'}
							onClick={toggleMeditationSessionStatus}
							containerStyles='mt-4'
						/>
					</View>
				</AppGradient>
			</ImageBackground>

			<StatusBar style='light' />
		</View>
	);
};

export default Meditate;
