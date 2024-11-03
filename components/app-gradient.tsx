import { useSafeArea } from '@/hooks/useSafeArea';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Text, View } from 'react-native';
import Content from './content';

interface AppGradientProps {
	children: any;
	colors: string[];
}

const AppGradient = ({ children, colors }: AppGradientProps) => {
	const { ios, top } = useSafeArea();

	return (
		<LinearGradient colors={colors} className='flex-1'>
			<Content>{children}</Content>
		</LinearGradient>
	);
};

export default AppGradient;
