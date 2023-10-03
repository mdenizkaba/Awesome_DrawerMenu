import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import DrawerSceneWrapper from '../../components/DrawerSceneWrapper';
import {useNavigation} from '@react-navigation/native';
import Icon from '../../components/Icon';
import React from 'react';

const HomeScreen = () => {
  const {toggleDrawer} = useNavigation();
  return (
    <DrawerSceneWrapper>
      <View style={styles.wrapper}>
        <SafeAreaView />
        <TouchableOpacity onPress={toggleDrawer}>
          <Icon name="arrow-left" size={20} color={'#0284c7'} />
        </TouchableOpacity>
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <Text>Home Screen</Text>
        </View>
      </View>
    </DrawerSceneWrapper>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
