import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import {AppLoading} from 'expo';
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AuthService from "./services/auth.service";

import Login from '../modules/login/scenes/loginScreen';
import SignUp from '../modules/login/scenes/SignUp';
import AddEvent from '../modules/home/scenes/AddEvent';
import Profile from '../modules/home/scenes/Profile';
import Home from '../modules/home/components/home.component';
import BoardUser from "../modules/home/components/board-user.component";
import BoardModerator from "../modules/home/components/board-moderator.component";
import BoardAdmin from "../modules/home/components/board-admin.component";

//import { color, navTitleStyle } from "../styles/theme";


const Stack= createStackNavigator()
const Tab = createBottomTabNavigator()

function TabNavigator() {
    return(
        <Tab.Navigator>
             <Tab.Screen name='addEvent' component={AddEvent} />
             <Tab.Screen name='Profile' component={Profile} />
        </Tab.Navigator>
    )
}

function StackNavigator() {
    return(

        <Stack.Navigator>
        
        <>
          <Stack.Screen name="login" component={Login} 
          options={{
              title: '',
              headerTitleAlign: 'center',
              headerTransparent: 'true',
              headerTintColor: "#0abde3",
              
          }} />
          <Stack.Screen name="signup" component={SignUp}
           options={{
              title: '',
              headerTransparent: 'true',

            }} />
        </>

        </Stack.Navigator>
    )
}
export default class Navigate extends React.Component {
    constructor (props) {
      super(props);
      this.state={
        showAdminBoard: false,
        currentUser: undefined,
        isReady: false
    }
    }
    
    componentDidMount() {
        setTimeout(()=> this.setState({isReady: true}),1000)

        const user= AuthService.getCurrentUser()

        if(user) {
            this.setState({
                currentUser: user,
                showAdminBoard: user.roles.includes("ROLE_ADMIN")
            });
        }
    }

    logOut = () => {
        AuthService.logOut();
        this.props.navigation('login')
    }
    render() {
        const {currentUser, showAdminBoard} =this.state;

        let navTitleStyle = { fontSize: 15, color: "teal"}
        
        if(!this.state.isReady)
            return <AppLoading/>

        return(
        <View>
           {currentUser ? (
                <TabNavigator/>
                <View>
                    <TouchableOpacity onPress={this.logOut}>LogOut</TouchableOpacity>
                 </View>   
            ) : (
                <StackNavigator/>
            )}
        </View>
           
            
        )
    }
}

