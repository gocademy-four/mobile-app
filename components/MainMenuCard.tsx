import * as React from "react"
import { Alert, Text, View, StyleSheet, Platform } from "react-native"
import { Button } from "react-native-elements"
import { createStackNavigator } from "react-navigation"

interface Props {
  color: string
  name: string
  subtitle: string
  button: string
  icon: string
  onPress: () => void
}

export default class MainMenuCard extends React.Component<Props> {
  render() {
    return (
      <View style={styles.container} backgroundColor={this.props.color}>
        <Text style={styles.cardName}>{this.props.name}</Text>
        <Text style={styles.cardSubtitle}>{this.props.subtitle}</Text>
        <Button
          onPress={this.props.onPress}
          title={this.props.button}
          icon={{
            name: this.props.icon,
            color: "#34495e"
          }}
          buttonStyle={styles.cardButton}
          titleStyle={styles.cardButtonTitle}
          containerStyle={styles.cardButtonContainer}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    paddingTop: 40,
    paddingBottom: 30,
    paddingLeft: 20,
    paddingRight: 12,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#fff"
  },
  cardName: {
    marginBottom: 0,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "justify",
    color: "#34495e"
  },
  cardSubtitle: {
    marginTop: 16,
    marginBottom: 16,
    fontSize: 18,
    textAlign: "justify",
    color: "#34495e"
  },
  buttonText: {
    color: "#34495e"
  },
  cardButton: {
    borderRadius: 3,
    borderColor: "#34495e",
    backgroundColor: "transparent",
    ...(Platform.OS === "ios" ? { borderWidth: 1 } : {})
  },
  cardButtonContainer: {
    marginLeft: 0
  },
  cardButtonTitle: {
    fontWeight: "bold",
    color: "#34495e"
  }
})
