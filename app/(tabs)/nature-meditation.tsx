import AppGradient from '@/components/app-gradient';
import { MEDITATION_DATA } from '@/constants/meditation-data';
import MEDITATION_IMAGES from '@/constants/meditation-images';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
	FlatList,
	ImageBackground,
	Pressable,
	Text,
	View
} from 'react-native';

const NatureMeditation = () => {
	return (
		<View className='flex-1'>
			<AppGradient colors={['#161B2E', '#0A4D4A', '#766E67']}>
				<View className='mb-6'>
					<Text className='text-gray-200 mb-3 font-bold text-4xl'>
						Hi There
					</Text>
					<Text className='text-sky-100 text-lg mt-3 uppercase'>
						Start your meditation practice today
					</Text>
				</View>
				<View>
					<FlatList
						data={MEDITATION_DATA}
						className='mb-20'
						keyExtractor={item => item.id.toString()}
						showsVerticalScrollIndicator={false}
						renderItem={({ item }) => (
							<Pressable
								onPress={() => console.log('press')}
								className='h-48 my-3 rounded-md overflow-hidden'
							>
								<ImageBackground
									source={MEDITATION_IMAGES[item.id - 1]}
									resizeMode='cover'
									className='flex-1 justify-center rounded-xl'
								>
									<LinearGradient
										colors={['transparent', 'rgba(0, 0, 0, 0.8)']}
										className='flex-1 items-center justify-center'
									>
										<Text className='text-gray-100 text-3xl font-bold text-center'>
											{item.title}
										</Text>
									</LinearGradient>
								</ImageBackground>
							</Pressable>
						)}
					/>
				</View>
			</AppGradient>
			<StatusBar style='light' />
		</View>
	);
};

export default NatureMeditation;
