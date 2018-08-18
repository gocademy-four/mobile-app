import * as React from "react"
import { Text, ScrollView, View, StyleSheet, Alert } from "react-native"
import { ListItem, Button } from "react-native-elements"
import { NavigationScreenProp } from "react-navigation"

interface Props {
  navigation: NavigationScreenProp<any>
}

export default class HistoryDetailScreen extends React.Component<Props> {
  static navigationOptions = {
    title: "Rincian"
  }

  render() {
    const list = [
      {
        title: "Nama",
        subtitle: this.props.navigation.getParam("name", "Unnamed")
      },
      {
        title: "Pelajaran",
        subtitle: this.props.navigation.getParam("lesson", "No lesson")
      },
      {
        title: "Waktu",
        subtitle: this.props.navigation.getParam("date", "No date")
      },
      {
        title: "Lokasi",
        subtitle: this.props.navigation.getParam("location", "Unlocated")
      },
      {
        title: "Harga/jam",
        subtitle: this.props.navigation.getParam("price", "Unknown")
      },
      {
        title: "Telepon",
        subtitle: this.props.navigation.getParam("telephone", "No number")
      }
    ]

    return (
      <View style={{paddingHorizontal:10}}>
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.header}>Rincian Pesanan</Text>
          {list.map((item, i) => (
            <ListItem
              key={i}
              title={item.title}
              titleStyle={styles.title}
              subtitle={item.subtitle}
              subtitleStyle={styles.subtitle}
              bottomDivider={true}
            />
          ))}
          <Button
            onPress={() =>
              Alert.alert(
                "Pesan ulang tutor ini?",
                "Tekan 'Tidak' untuk membatalkan pesanan",
                [
                  {
                    text: "Tidak",
                    onPress: () => console.log("No Pressed"),
                    style: "cancel"
                  },
                  {
                    text: "Ya",
                    onPress: () => this.props.navigation.navigate("History")
                  }
                ],
                { cancelable: false }
              )
            }
            title="Pesan Ulang Tutor"
            icon={{ name: "schedule", color: "white" }}
            buttonStyle={{
              borderRadius: 3,
              marginBottom: 20,
              backgroundColor: "#34495e"
            }}
            containerStyle={{
              alignSelf: "stretch",
              marginTop: 12
            }}
          />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    justifyContent: 'space-between',
    flexGrow: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "justify",
    paddingBottom: 14,
    marginTop: 20,
    color: "#34495e"
  },
  title: {
    fontSize: 16,
  },
  subtitle: {
    color: "#007aff",
    fontSize: 18
  }
})
