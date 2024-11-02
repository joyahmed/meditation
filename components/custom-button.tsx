import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

interface CustomButtonProps {
	onPress: () => void;
	title: string;
	textStyles?: string;
	containerStyles?: string;
}

const CustomButton = ({
	onPress,
	title,
	textStyles = '',
	containerStyles = ''
}: CustomButtonProps) => {
	return (
		<TouchableOpacity
			activeOpacity={0.7}
			className={`flex justify-center items-center bg-blue-900/30 rounded-2xl min-h-[62px] hover:bg-blue-900/40 ${containerStyles}`}
			onPress={onPress}
		>
			<Text
				className={`font-semibold text-lg text-white tracking-wider uppercase ${textStyles}`}
			>
				{title}
			</Text>
		</TouchableOpacity>
	);
};

export default CustomButton;
