import meditationBg from '@/assets/meditation-images/meditation-bg.webp';
import AppGradient from '@/components/app-gradient';
import CustomButton from '@/components/custom-button';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, Platform, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ios = Platform.OS == 'ios';

const App = () => {
	const { top } = useSafeAreaInsets();

	return (
		<View className='flex-1'>
			<ImageBackground
				source={meditationBg}
				resizeMode='cover'
				className='flex-1'
			>
				<AppGradient
					colors={['rgba(0, 0, 0, 0.4)', 'rgba(0, 0, 0, 0.8)']}
				>
					<View
						style={{ paddingTop: ios ? top : top + 10 }}
						className='flex-1 justify-between mx-5 my-12'
					>
						<View>
							<Text className='text-center text-white font-bold text-4xl uppercase'>
								Meditation
							</Text>
							<Text className='text-center text-white text-lg mt-3 uppercase'>
								Simplyfying Meditation for everyone
							</Text>
						</View>
						<View>
							<CustomButton
								{...{
									title: 'Get Started',
									onClick: () => router.push('/nature-meditation')
								}}
							/>
						</View>
					</View>
				</AppGradient>
			</ImageBackground>

			<StatusBar style='light' />
		</View>
	);
};

export default App;
