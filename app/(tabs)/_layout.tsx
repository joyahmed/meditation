import Colors from '@/constants/Colors';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

import { Tabs } from 'expo-router';
import React from 'react';

const TabsLayout = () => {
	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarActiveTintColor: 'white',
				tabBarStyle: {
					backgroundColor: '#161B2E'
				}
			}}
		>
			<Tabs.Screen
				name='nature-meditation'
				options={{
					tabBarLabel: 'Meditate',
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons
							name='meditation'
							size={24}
							color={color}
						/>
					)
				}}
			/>
			<Tabs.Screen
				name='affirmations'
				options={{
					tabBarLabel: 'Affirmations',
					tabBarIcon: ({ color }) => (
						<Entypo name='open-book' size={24} color={color} />
					)
				}}
			/>
		</Tabs>
	);
};

export default TabsLayout;
