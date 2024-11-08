import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import Content from './content';

interface AppGradientProps {
	children: any;
	colors: string[];
}

const AppGradient = ({ children, colors }: AppGradientProps) => {
	return (
		<LinearGradient colors={colors} className='flex-1'>
			<Content>{children}</Content>
		</LinearGradient>
	);
};

export default AppGradient;
