import * as React from "react"
import { Text, View, StyleSheet, Alert } from "react-native"
import { ListItem } from "react-native-elements"
import { NavigationScreenProp } from "react-navigation"

interface Props {
  navigation: NavigationScreenProp<any>
}

const list = [
  {
    name: "Appointments",
    location: "tangerang",
    price: "100k"
  },
  {
    name: "Trips",
    location: "tangerang",
    price: "150k"
  }
]

export default class SearchResultScreen extends React.Component<Props> {
  static navigationOptions = {
    title: "Search Result"
  }

  private orderPressed = async () => {
    const response = await fetch(
      "https://gocademy-tutor-api-server.herokuapp.com/orders",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          teachedlesson: this.state.teachedlesson
        })
      }
    )

    if (response.status === 200) {
      const { token } = JSON.parse(await response.text())

      await AsyncStorage.setItem("token", token)
      this.props.navigation.navigate("Initial")
    } else {
      console.warn("Unable to login")
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {list.map((item, i) => (
          <ListItem
            key={i}
            title={item.name}
            titleStyle={styles.title}
            subtitle={
              "Lokasi: " + item.location + "\nHarga: " + item.price + "/jam"
            }
            leftIcon={{ name: "school" }}
            chevron
            bottomDivider={true}
            onPress={() =>
              Alert.alert(
                "Pilih tutor ini?",
                "Tekan 'Tidak' untuk membatalkan pesanan",
                [
                  {
                    text: "Tidak",
                    onPress: () => console.log("No Pressed"),
                    style: "cancel"
                  },
                  {
                    text: "Ya",
                    onPress: () => this.orderPressed,
                  }
                ],
                { cancelable: false }
              )
            }
          />
        ))}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ecf0f1"
  },
  title: {
    fontWeight: "bold"
  }
})
