import { Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const useSafeArea = () => {
	const ios = Platform.OS == 'ios';

	const { top } = useSafeAreaInsets();

	return { ios, top };
};
