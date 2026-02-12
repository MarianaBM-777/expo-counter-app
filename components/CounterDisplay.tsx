import { Text, StyleSheet } from 'react-native';

interface Props {
  value: number;
}

export default function CounterDisplay({ value }: Props) {
  return (
    <Text
      style={[
        styles.counterText,
        { color: value > 20 ? 'red' : 'green' },,
      ]}
    >
      {value}
    </Text>
  );
}

const styles = StyleSheet.create({
  counterText: {
    fontSize: 120,
    fontWeight: '100',
  },
});