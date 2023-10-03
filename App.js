import 'react-native-gesture-handler';
import {Image, StyleSheet, Text, View} from 'react-native';
import Navigation from './src/navigatios';
import BGImage from './src/assets/images/cloud.jpg';

const App = () => {
  return (
    <View style={styles.wrapper}>
      <Image style={styles.bg} source={BGImage} resizeMode={'cover'} />
      <Navigation />
    </View>
  );
};
export default App;
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#f0f9ff',
  },
  bg: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    width: '100%',
    height: '100%',
    opacity: 0.3,
  },
});
