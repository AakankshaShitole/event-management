import React from 'react';
import {FlatList, View, StyleSheet,Text} from 'react-native';
import axios from 'axios'
 function ShowData({username}) {
   return (
       <View style={styles.container}>
           <Text>{username}</Text>
       </View>
   )     
}

export default class Home extends React.Component{

    state={
        data:[],
    }

    fetchData(){
        const url='http://192.168.2.6:4545/users';
      axios.get(url)
      .then(res => res.json())
     // .then(users => console.log(users))
      .then(users => {
        this.setState({ data:users });
        console.log(users)
    })
    .catch(error => console.log(error))
    }

    

    componentDidMount() {
        this.fetchData();
    }
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                
                //keyExtractor={(item,index) => index.toString()}
                data={this.state.data}
                renderItem ={ ({item}) => 
         <ShowData username= {item.username}/>}
                    
                >
                </FlatList>
            </View>
        )
    }
}
const styles= StyleSheet.create({
    container : {
        flex:1,
        marginTop: 20,
    }
})