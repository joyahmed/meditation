import { Stack } from 'expo-router';
import React from 'react';
import { Text } from 'react-native';

const AffirmationsLayout = () => {
	return (
		<Stack>
			<Stack.Screen name='index' options={{ headerShown: false }} />
			<Stack.Screen
				name='[itemId]'
				options={{ headerShown: false }}
			/>
		</Stack>
	);
};

export default AffirmationsLayout;
