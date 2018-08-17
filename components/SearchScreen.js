import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Picker } from 'react-native-picker-dropdown';

export default class SearchScreen extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { language: 'js' };
    this.onValueChange = this.handleValueChange.bind(this);
  }

  handleValueChange(language) {
    this.setState({ language });
  }

  static navigationOptions = {
    title: 'Search',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Mulai pencarian!</Text>
        <Text style={styles.subtitle}>Isi kolom berikut ini sesuai dengan kebutuhanmu.</Text>
        <Picker
          selectedValue={this.state.language}
          onValueChange={this.onValueChange}
          mode="dialog"
          textStyle={styles.pickerText}
        >
          <Picker.Item label="JavaScript" value="js" />
          <Picker.Item label="Ruby" value="ruby" />
          <Picker.Item label="Python" value="python" />
          <Picker.Item label="Elm" value="elm" />
        </Picker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'top',
    padding: 20,
    backgroundColor: '#91CB6F',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'justify',
    color: '#34495e',
  },
  subtitle: {
    marginTop: 14,
    fontSize: 18,
    textAlign: 'justify',
    color: '#34495e',
  }
});
