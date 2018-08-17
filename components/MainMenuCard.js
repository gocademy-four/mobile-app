import * as React from 'react';
import { Alert, Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation';

export default class MainMenuCard extends React.Component {
  render() {
    return(
      <View
        style={styles.container}
        backgroundColor={this.props.color}
      >
        <Text style={styles.cardName}>{ this.props.name }</Text>
        <Text style={styles.cardSubtitle}>{ this.props.subtitle }</Text>
        <Button
          onPress = {this.props.onPress}
          title={this.props.button}
          fontWeight='bold'
          color="#34495e"
          icon={{name: this.props.icon, color:"#34495e"}}
          buttonStyle={{
            borderWidth:1,
            borderRadius:3,
            borderColor:'#34495e',
            backgroundColor:'transparent'
          }}
          containerViewStyle={{marginLeft:0}}
        />
      </View> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingTop: 40,
    paddingBottom: 30,
    paddingLeft: 20,
    paddingRight: 12,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: "#fff",
  },
  cardName: {
    marginBottom: 0,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'justify',
    color: '#34495e',
  },
  cardSubtitle: {
    marginTop: 16,
    marginBottom: 16,
    fontSize: 18,
    textAlign: 'justify',
    color: '#34495e',
  },
});
