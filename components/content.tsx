import { useSafeArea } from '@/hooks/useSafeArea';
import React from 'react';
import { View } from 'react-native';

const Content = ({ children }: any) => {
	const { ios, top } = useSafeArea();
	return (
		<View
			style={{ paddingTop: ios ? top : top + 10 }}
			className='flex-1 px-4'
		>
			{children}
		</View>
	);
};

export default Content;
