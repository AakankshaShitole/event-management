import React from 'react';
import { Text, View, StyleSheet , Image, TextInput, KeyboardAvoidingView, StatusBar} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Navigate from '../../../routes/routes';
import AuthService from '../../../services/auth.service'

export default class Login extends React.Component {

  state = (props) = {
    username: ' ',
    password: ' ',
    message: '',
    isValid: false
  }

  validate = () => {
      if(this.state.username !==' ' && this.state.password !== ' ')
        this.setState({ isValid: true });
  }

  onPassword = password => {
    this.setState({password}, this.validate)
   
  }

  onUsername = username => {
    this.setState({username}, this.validate)
     }

 goto=() => {
 this.props.navigation.navigate('signup')
  }
  goLogin = () => {
    //this.props.navigation.navigate('home')

    AuthService.login(this.state.username, this.state.password).then(
      () => {
        this.props.history.push("/profile");
       // window.location.reload();
      },
      error => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        this.setState({
          isValid: false,
          message: resMessage
        });
        console.log(resMessage);
      }
    );

  }
  
render() {
  return (
          <KeyboardAvoidingView behavior='padding' style={styling.container}>
              <View style={styling.imageCont}>
                <Image style={styling.image} 
                source={require('../../../../assets/event2.png')}>
                </Image>
              </View>

              <View>
                <TouchableOpacity style={styling.titleCont} onPress={this.goto}>
                  <Text style={styling.title}>Not a user?SignUp</Text>  
                </TouchableOpacity>
              </View>
              <View style={styling.formCont}>
                <StatusBar barStyle="light-content" />

                <TextInput style={styling.input}
                placeholder="username"
                placeholderTextColor='rgba(255,255,255,0.7)'
                returnKeyType="next"
                onSubmitEditing={() => this.passwordInput.focus()}
                keyboardType='email-address'
                autoCapitalize="none"
                autoCorrect={false}
                value={this.state.username}
                onChangeText={this.onUsername}
                >
                </TextInput>

                <TextInput style={styling.input}
                  placeholder="password"
                  placeholderTextColor='rgba(255,255,255,0.7)'
                  secureTextEntry
                  returnKeyType="go"
                  ref={(input) => this.passwordInput = input}
                  value={this.state.password}
                  onChangeText={this.onPassword}
                >
                </TextInput>

                <Button style={styling.buttonCont}
                  disabled={!this.state.isValid}
                  title='Login'
                  onPress={this.goLogin}
                >
                </Button>

            </View>
          </KeyboardAvoidingView>
  );
}
}
const styling= StyleSheet.create({
   container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor:'#c8d6e5',
    padding: 8,
  },
  formCont:{
    padding: 20,
  },
  input: {
    height: 40,
    backgroundColor: '#2e86de',
    marginBottom:10,
    color: '#2980b9',
    paddingHorizontal: 10,
  },
  buttonCont: {
    backgroundColor: '#2980b9',
    paddingVertical: 15,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight:'700',
  },
  imageCont: {
     alignItems: 'center',
     flexGrow:1,
     justifyContent: 'center',
  },

  image: {
     width: 350,
     height: 150,
    },
    title: {
      color:'#2980b9',
      fontWeight:'500',
      justifyContent:'center',
      alignItems:'center',
      textAlign:'center',
   },
   titleCont:{
     paddingVertical:20,
   }
});
/*
<View style={styling.imageCont}>

                  <Image style={styling.image}
                  source={image}>
                  </Image>
              
              </View>
              
*/