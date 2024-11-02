import CustomButton from '@/components/custom-button';
import { LinearGradient } from 'expo-linear-gradient';
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
				source={require('@/assets/meditation-images/beach.webp')}
				resizeMode='cover'
				className='flex-1'
			>
				<LinearGradient
					className='flex-1'
					colors={['rgba(0, 0, 0, 0.4)', 'rgba(0, 0, 0, 0.8)']}
				>
					<View
						style={{ paddingTop: ios ? top : top + 10 }}
						className='flex-1 justify-between mx-5 my-12'
					>
						<View>
							<Text className='text-center text-white font-bold text-4xl'>
								Meditation
							</Text>
							<Text className='text-center text-white text-2xl mt-3'>
								Simplyfying Meditation for everyone
							</Text>
						</View>
						<View>
							<CustomButton
								{...{
									onPress: () => console.log('pressed'),
									title: 'Get Started'
								}}
							/>
						</View>

						<StatusBar style='light' />
					</View>
				</LinearGradient>
			</ImageBackground>
		</View>
	);
};

export default App;
