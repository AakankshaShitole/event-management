import  React from 'react';
import { Text, View, StyleSheet,ScrollView,TextInput } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class AddEvent extends React.Component {
  
  state={
    day:""
  }
  setDate = day =>{
    this.setState({day})
  }
  render(){
  return (
      <View style={styles.container}>
    <ScrollView style={styles.scrollView}
    showsVerticalScrollIndicator={false}>
      <Text style={styles.paragraph}>
      Title
      </Text>
      <TextInput style={styles.input}
       multiline
      numberOfLines={4}>
      </TextInput>
      <Text style={styles.date}>
       Date     { this.state.day}
      </Text>
      
      <View style={{ paddingTop: 10, flex: 1 }}>
        <Calendar
          // Initially visible month. Default = Date()
          current={'2020-01-01'}
        firstDay={1}
          minDate={'2020-01-01'}

         onDayPress={day => {this.setDate(day.dateString)}
          }
        />
      </View>
       <Text style={styles.paragraph}>
      Venue
      </Text>
      <TextInput style={styles.input}
       multiline
      numberOfLines={4}>
      </TextInput>
       <Text style={styles.paragraph}>
      Description
      </Text>
      <TextInput style={styles.input}
       multiline
      numberOfLines={15}>
      </TextInput>

      <TouchableOpacity style={styles.buttonCont}>
                  <Text style={styles.buttonText}>Save Event</Text>  
                </TouchableOpacity>

    </ScrollView>
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    flex:1,
        backgroundColor: '#00d2d3',
  },
  scrollView:{
      marginHorizontal:1,
  },
  paragraph: {
    marginTop: 10,
    paddingBottom:4,
    
    left:0,
    paddingLeft:0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  input: {
  
    width:290,
    backgroundColor: 'rgba(255,255,255,0.7)',
    marginBottom:10,
    color: 'black',
    paddingHorizontal: 1,
  },
date:{
   fontSize: 14,
    fontWeight: 'bold',
   marginTop:10,
   marginBottom:0,
   paddingBottom:0,
   textAlign:'left'
},
buttonCont: {
  backgroundColor: 'rgba(255,255,255,0.7)',
  paddingVertical: 15,
},
buttonText: {
  textAlign: 'center',
  color: '#10ac84',
  fontWeight:'700',
  fontSize: 20,
},
});
