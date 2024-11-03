import { Href, useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

interface CustomButtonProps {
	title: string;
	textStyles?: string;
	containerStyles?: string;
	link: Href<string | object> | string;
}

const CustomButton = ({
	title,
	textStyles,
	containerStyles,
	link
}: CustomButtonProps) => {
	const router = useRouter();
	const handlePress = () => {
		if (link) {
			router.push(link as Href<string | object>);
		}
	};
	return (
		<TouchableOpacity
			activeOpacity={0.7}
			className={`flex justify-center items-center bg-blue-900/30 rounded-2xl min-h-[62px] hover:bg-blue-900/40 ${containerStyles}`}
			onPress={handlePress}
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
