import AppGradient from '@/components/app-gradient';
import BackButton from '@/components/back-button';
import CustomButton from '@/components/custom-button';
import { TimerContext } from '@/store/timer-context';
import { router } from 'expo-router';
import React, { useContext } from 'react';
import { Text, View } from 'react-native';

const AdjustMeditationDuration = () => {
	const { setDuration } = useContext(TimerContext);

  const handlePress = (duration: number) => {
		setDuration(duration);
		router.back();
	};

	return (
		<View className='flex-1 relative'>
			<AppGradient
				// Background Linear Gradient
				colors={['#161b2e', '#0a4d4a', '#766e67']}
			>
				<BackButton />
				<View className='justify-center h-4/5'>
					<View>
						<Text className='text-center font-bold text-3xl text-white mb-8'>
							Adjust your meditation duration
						</Text>
					</View>

					<View>
						<CustomButton
							title='10 seconds'
							onClick={() => handlePress(10)}
							containerStyles='mb-5'
						/>
						<CustomButton
							title='5 minutes'
							onClick={() => handlePress(5 * 60)}
							containerStyles='mb-5'
						/>
						<CustomButton
							title='10 minutes'
							onClick={() => handlePress(10 * 60)}
							containerStyles='mb-5'
						/>
						<CustomButton
							title='15 minutes'
							onClick={() => handlePress(15 * 60)}
							containerStyles='mb-5'
						/>
					</View>
				</View>
			</AppGradient>
		</View>
	);
};

export default AdjustMeditationDuration;
