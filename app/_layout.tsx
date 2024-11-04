import TimerProvider from '@/store/timer-context';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { View } from 'react-native';
import '../global.css';

// This will prevent the splash screen from auto hiding until laoding all the fonts
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const [fontsLoaded, error] = useFonts({
		'Robotto-Mono': require('@/assets/fonts/RobotoMono-Regular.ttf')
	});

	useEffect(() => {
		if (error) throw error;
		if (fontsLoaded) SplashScreen.hideAsync();
	}, [fontsLoaded, error]);

	if (!fontsLoaded) return null;
	if (!fontsLoaded && !error) return null;
	return (
		<TimerProvider>
			<Stack>
				<Stack.Screen
					name='(tabs)'
					options={{ headerShown: false }}
				/>
				<Stack.Screen name='index' options={{ headerShown: false }} />
				<Stack.Screen
					name='meditate/[id]'
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name='(modal)/adjust-duration'
					options={{ headerShown: false, presentation: 'modal' }}
				/>
			</Stack>
		</TimerProvider>
	);
}
