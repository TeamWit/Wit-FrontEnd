import { Text, TextProps } from 'react-native';
import { useColorScheme } from 'react-native';

export function ThemedText(props: TextProps) {
    const colorScheme = useColorScheme();
    const themeColor = colorScheme === 'dark' ? 'white' : 'black';

    return (
        <Text {...props} style={[{ color: themeColor }, props.style]}>
            {props.children}
        </Text>
    );
}