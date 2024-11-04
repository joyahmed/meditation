import { AntDesign } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { Pressable } from 'react-native';

const BackButton = () => {
	return (
		<Pressable
			onPress={() => router.back()}
			className='absolute top-16 left-6 z-10'
		>
			<AntDesign name='leftcircle' size={30} color='white' />
		</Pressable>
	);
};

export default BackButton;
