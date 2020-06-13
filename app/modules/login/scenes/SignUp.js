import React from 'react';
import { Text, View, StyleSheet,Button , Image, TextInput, KeyboardAvoidingView, StatusBar} from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';
import Navigate from '../../../routes/routes';



export default class SignUp extends React.Component {
  state= (props) = {
    username: ' ',
    email: ' ',
    password:" ",
    confirmPassword:"",
    isValid:false,
    message: ''
  }
  
  goto=() => {
  
    AuthService.register(
      this.state.username,
      this.state.email,
      this.state.password
    ).then(
      response => {
        this.setState({
          message: response.data.message,
          isValid: true
        });
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
        console.log(resMessage)
      }
    )
    this.props.navigation.navigate('login')

  }
  

  
  validate = () => {
              if (this.state.username !==' ' && this.state.email !== ' ' && this.state.password !== " " && this.state.password===this.state.confirmPassword) 
              this.setState({isValid:true})
              else 
              this.setState({isValid:false})

  }

  onUsername = username => {
    this.setState({username}, this.validate)
    
  }

  onEmail = email => {
      this.setState({email}, this.validate)
      
   }
  onPassword = password => {
 this.setState({password}, this.validate)
 
  }

  onConfirmPassword = confirmPassword => {
 this.setState({confirmPassword}, this.validate)
  }

render() {
  return (
          <KeyboardAvoidingView behavior='padding' style={styling.container}>
              <View style={styling.imageCont}>
                <Image style={styling.image}
                source={require('../../../../assets/event2.png')}/>
              </View>
              <View>
                <TouchableOpacity style={styling.titleCont} onPress={this.goto}>
                  <Text style={styling.title}>Already a user?Login</Text>  
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
                  placeholder="email"
                  placeholderTextColor='rgba(255,255,255,0.7)'
                  returnKeyType="next"
                  onSubmitEditing={() => this.passwordInput.focus()}
                  keyboardType='email-address'
                  autoCapitalize="none"
                  autoCorrect={false}
                  value={this.state.email}
                  onChangeText={this.onEmail}
                  >
                  </TextInput>

                  <TextInput style={styling.input}
                    placeholder="password"
                    placeholderTextColor='rgba(255,255,255,0.7)'
                    secureTextEntry
                    returnKeyType="next"
                    value={this.state.password}
                    onChangeText={this.onPassword}
                  >
                  </TextInput>
                  
                  <TextInput style={styling.input}
                    placeholder="confirm password"
                    placeholderTextColor='rgba(255,255,255,0.7)'
                    secureTextEntry
                    returnKeyType="go"
                    value={this.state.confirmPassword}
                    onChangeText={this.onConfirmPassword}
                    >
                  </TextInput>

                  <Button style={styling.buttonCont}
                  disabled={!this.state.isValid}
                  title='SignUp'
                  onPress={this.goto}
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
    backgroundColor:'#3498db',
    padding: 8,
  },
  formCont:{
    padding: 20,
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom:10,
    color: '#FFF',
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
     justifyContent: 'flex-start',
    },
  title: {
     color:'#fff',
    fontWeight: '500',
     justifyContent:'center',
     alignItems:'center',
     textAlign:'center',
  },
  titleCont:{
    paddingVertical:20,
  },
});
/*
<View style={styling.imageCont}>

                  <Image style={styling.image}
                  source={image}>
                  </Image>
              
              </View>
              
*/