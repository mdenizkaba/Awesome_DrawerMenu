import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import DrawerSceneWrapper from '../../components/DrawerSceneWrapper';
import Icon from '../../components/Icon';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const SettingsScreen = () => {
  const {toggleDrawer} = useNavigation();
  return (
    <DrawerSceneWrapper>
      <View style={styles.wrapper}>
        <SafeAreaView />
        <TouchableOpacity onPress={toggleDrawer}>
          <Icon name="arrow-left" size={20} color={'#0284c7'} />
        </TouchableOpacity>
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <Text>Settings Screen</Text>
        </View>
      </View>
    </DrawerSceneWrapper>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
    flex: 1,
  },
});
