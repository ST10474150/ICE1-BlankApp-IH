import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [count,setCount] = useState<number>();
  const handlePress = () => {console.log('you clicked the button')}
  return (
    <View style={styles.container}>
      <Text>Hello, Iyad Hassim.</Text>
      <Text>{count}</Text>
      <Button 
      title="Click Here"
      onPress={handlePress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
