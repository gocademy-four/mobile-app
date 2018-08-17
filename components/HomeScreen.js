import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import MainMenuCard from './MainMenuCard';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    return (
      <View style={styles.container}>
        <MainMenuCard
          name="Cari Tutor"
          subtitle="Sudah siap belajar bersama GO-TUTOR? Ayo cari gurunya!"
          button="Mulai cari tutor"
          onPress={() => this.props.navigation.navigate('Search')}
          color='#91CB6F'
          icon='search'
        />
        <MainMenuCard
          name="Log Pesanan"
          subtitle="Masih lupa besok belajar dengan siapa? Yuk, lihat catatannya!"
          button="Buka log pesanan"
          color='#88AA77'
          icon='history'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
});
