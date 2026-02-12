import { Text, Pressable, StyleSheet } from 'react-native';

interface Props {
    label: string; // Texto que mostrará el botón
    position?: 'left' | 'right' | 'right2'; // Posición horizontal del botón
    onPress?: () => void; // Acción al presionar
    onLongPress?: () => void; // Acción al mantener presionado
}
export default function FAB({
    label,
    onPress,
    onLongPress,
    position = 'right',
}: Props) {
    return (
        <Pressable
            style={({ pressed }) => [
                styles.floatingButton,
                position === 'right' && styles.positionRight,
                position === 'right2' && styles.positionRight2,
                position === 'left' && styles.positionLeft,
                pressed ? { opacity: 0.7 } : { opacity: 1 },
            ]}
            onPress={onPress}
            onLongPress={onLongPress}
        >
            <Text style={styles.text}>{label}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
floatingButton: {
position: 'absolute',
bottom: 20,
backgroundColor: '#65558F',
padding: 20,
borderRadius: 15,
elevation: 3,
},
positionRight: {
right: 20,
},
positionLeft: {
left: 20,
},
positionRight2: {
 right: 90,
},
text: {
color: 'white',
fontSize: 20,
},
})