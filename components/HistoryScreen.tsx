import * as React from "react"
import { Text, View, StyleSheet, ActivityIndicator } from "react-native"
import { ListItem } from "react-native-elements"
import { NavigationScreenProp } from "react-navigation"

interface Props {
  navigation: NavigationScreenProp<any>
}

interface State {
  historyData: any[] | null
}

export default class HistoryScreen extends React.Component<Props, State> {
  constructor(props: Props, context?: any) {
    super(props, context)

    this.state = {
      historyData: null
    }
  }

  static navigationOptions = {
    title: "Pesanan"
  }

  private populateHistories = async () => {
    const response = await fetch(
      "https://gocademy-tutor-api-server.herokuapp.com/history",
      {
        method: "GET",
        headers: {
          Accept: "application/json"
        }
      }
     )

    if (response.status === 200) {
      this.setState({ historyData: await response.json() })
    } else {
      console.warn("Unable to fetch classes")
    }
  }

  componentDidMount() {
    this.populateHistories()
  }


  render() {
    return (
      <View style={styles.container}>
      {this.state.historyData ? (
        this.state.historyData.map((item, i) => (
          <ListItem
            key={i}
            title={item.name}
            titleStyle={styles.title}
            subtitle={
              "Pelajaran: " +
              item.teachedlesson +
              "\n" +
              item.location +
              ", " +
              item.date +
              "\n" +
              item.telephone
            }
            leftIcon={{ name: "school" }}
            chevron
            bottomDivider={true}
            onPress={() => {
              this.props.navigation.navigate("HistoryDetail", {
                name: item.name,
                location: item.location,
                date: item.date,
                lesson: item.lesson,
                telephone: item.telephone
              })
            }}
          />
          ))) : (
          <ActivityIndicator />
          )
        }
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
