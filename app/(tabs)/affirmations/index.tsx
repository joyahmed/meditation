import AppGradient from '@/components/app-gradient';
import GuidedAffirmationsGallery from '@/components/guided-affirmations-gallery';
import AFFIRMATION_GALLERY from '@/constants/affirmations-gallery';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';

const Affirmations = () => {
	return (
		<View className='flex-1'>
			<AppGradient colors={['#2E1F58', '#54426B', '#A790AF']}>
				<ScrollView showsVerticalScrollIndicator={false}>
					<Text className='text-zinc-50 text-2xl font-bold uppercase text-center'>
						Change your beliefs with affirmations
					</Text>
					<View>
						{AFFIRMATION_GALLERY.map(gallery => (
							<GuidedAffirmationsGallery
								key={gallery.title}
								{...{ title: gallery.title, previews: gallery.data }}
							/>
						))}
					</View>
				</ScrollView>

				<StatusBar style='light' />
			</AppGradient>
		</View>
	);
};

export default Affirmations;
