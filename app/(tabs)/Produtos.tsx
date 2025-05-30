import { StyleSheet, Text, View } from 'react-native';


export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text>Produto</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F5",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
