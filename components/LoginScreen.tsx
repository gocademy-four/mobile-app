import * as React from "react"
import { StyleSheet, Text, View, AsyncStorage } from "react-native"
import { Input, Button } from "react-native-elements"
import { NavigationScreenProp } from "react-navigation"

interface Props {
  navigation: NavigationScreenProp<any>
}

interface State {
  email: string
  password: string
  loginInProcess: boolean
  unableLogin: boolean
}

export default class LoginScreen extends React.Component<Props, State> {
  constructor(props: Props, context?: any) {
    super(props, context)

    this.state = {
      email: "",
      password: "",
      loginInProcess: false,
      unableLogin: false,
    }
  }

  static navigationOptions = {
    title: "Login"
  }

  private registerPressed = () => {
    this.props.navigation.navigate("Register")
  }

  private loginPressed = async () => {
    this.setState({ loginInProcess: true })
    this.setState({ unableLogin: false })
    const response = await fetch(
      "https://gocademy-tutor-api-server.herokuapp.com/session/login",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password
        })
      }
    )

    if (response.status === 200) {
      const { token } = JSON.parse(await response.text())
      await AsyncStorage.setItem("token", token)
      this.props.navigation.navigate("Initial")
    } else {
      console.warn("Unable to login")
      this.setState({ loginInProcess: false})
      this.setState({ unableLogin: true})
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>GO - TUTOR</Text>
        <Input
          leftIcon={{ name: "email" }}
          containerStyle={styles.input}
          placeholder="Email"
          onChangeText={email => this.setState({ ...this.state, email })}
        />
        <Input
          leftIcon={{ name: "lock" }}
          containerStyle={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={password => this.setState({ ...this.state, password })}
        />
        { this.state.unableLogin && <Text style={styles.warning}>Email atau password Anda salah</Text>}
        <Button
          title="Masuk"
          onPress={this.loginPressed}
          disabled={this.state.loginInProcess}
        />
        <Text style={{ marginTop: 20 }}>Belum punya akun?</Text>
        <Text style={{ color: "blue" }} onPress={this.registerPressed}>
          Daftar sekarang
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonContainer: {
    flexDirection: "row"
  },
  title: {
    marginBottom: 16,
    fontSize: 24
  },
  input: {
    marginBottom: 12
  },
  warning: {
    marginVertical: 10,
    color: 'red',
  }
})
