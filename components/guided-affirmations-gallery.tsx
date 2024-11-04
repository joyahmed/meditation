import { Link } from 'expo-router';
import React from 'react';
import { FlatList, Image, Pressable, Text, View } from 'react-native';

interface GuidedAffirmationsGalleryProps {
	title: string;
	previews: GalleryPreviewData[];
}

const GuidedAffirmationsGallery = ({
	title,
	previews
}: GuidedAffirmationsGalleryProps) => {
	return (
		<View className='my-5'>
			<View className='mb-2'>
				<Text className='text-white font-bold text-xl'>{title}</Text>
			</View>
			<View className='space-y-2'>
				<FlatList
					data={previews}
					horizontal
					showsHorizontalScrollIndicator={false}
					keyExtractor={item => item.id.toString()}
					renderItem={({ item }) => (
						//@ts-ignore
						<Link href={`/affirmations/${item.id}`} asChild>
							<Pressable>
								<View className='h-32 w-32  mr-4'>
									<Image
										source={item.image}
										resizeMode='cover'
										className='w-full h-full rounded-md'
									/>
								</View>
							</Pressable>
						</Link>
					)}
				/>
			</View>
		</View>
	);
};

export default GuidedAffirmationsGallery;