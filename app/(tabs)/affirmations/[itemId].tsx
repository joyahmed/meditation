import AppGradient from '@/components/app-gradient';
import AFFIRMATION_GALLERY from '@/constants/affirmations-gallery';
import { AntDesign } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
	ImageBackground,
	Pressable,
	ScrollView,
	Text,
	View
} from 'react-native';

const AffirmationPractice = () => {
	const { itemId } = useLocalSearchParams();
	const [affirmation, setAffirmation] =
		useState<GalleryPreviewData>();
	const router = useRouter();

	useEffect(() => {
		for (let idx = 0; idx < AFFIRMATION_GALLERY.length; idx++) {
			const affirmationsData = AFFIRMATION_GALLERY[idx].data;
			const affirmationToStart = affirmationsData.find(
				a => a.id === Number(itemId)
			);

			if (affirmationToStart) {
				setAffirmation(affirmationToStart);

				const affirmationsArray = affirmationToStart.text.split('.');

				if (affirmationsArray[affirmationsArray.length - 1] == '') {
					affirmationsArray.pop();
				}

				return;
			}
		}
	}, []);
	return (
		<View className='flex-1'>
			<ImageBackground
				source={affirmation?.image}
				resizeMode='cover'
				className='flex-1'
			>
				<AppGradient colors={['rgba(0,0,0,0.3)', 'rgba(0,0,0,0.9)']}>
					<Pressable
						onPress={() => router.back()}
						className='absolute top-16 left-6 z-10'
					>
						<AntDesign name='leftcircle' size={30} color='white' />
					</Pressable>
					<ScrollView showsVerticalScrollIndicator={false}>
						<View className='flex-1 h-fit items-center justify-center my-auto mt-28'>
							<Text className='text-white text-3xl font-bold text-center whitespace-pre-line'>
								{affirmation?.text}
							</Text>
						</View>
					</ScrollView>
				</AppGradient>
			</ImageBackground>
		</View>
	);
};

export default AffirmationPractice;
