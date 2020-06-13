
/*import SignUp from "./scenes/SignUp";
import Login from "./scenes/loginScreen";
import AddEvent from "../home/scenes/AddEvent";
import {NavigationContainer} from '@react-navigation/native'

import {createSwitchNavigator} from 'react-navigation';

 const MyNav= createSwitchNavigator({
    login : Login,
    signup : SignUp,
    addEvent : AddEvent,
}) 

const MyNav= createSwitchNavigator()



export const AppContainer = createAppContainer(MyNav);
/*export default class extends React.Component {
    state ={
        isReady: false
    };

    componentDidMount() {
        setTimeout(()=> this.setState({isReady: true}),1000)
    }

    render() {
        let navTitleStyle = { fontSize: 15, color: "teal"}
    
        if(!this.state.isReady)
            return <AppLoading/>

        return (
            <Router>
                <Scene key='login'>
                <Scene key="login" component={Login} hideNavBar={true}/>
                <Scene key="signUp" component={SignUp} hideNavBar={true}/>
                </Scene>
            </Router>
        )
    }
}
*/