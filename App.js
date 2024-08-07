import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableHighlight, View,Image } from 'react-native';
import data from './assets/generated.json';

export default function App() {

  const [selectItem,setSelectItem] = useState(null);


  const  renderItems=({item}) => (
    <TouchableHighlight onPress={() => setSelectItem(item)}>
    <View style = {styles.listItem}>
      <Image source={{uri : item.picture}} style={styles.listimage}/>
      <Text style={styles.text}>{item.name}</Text>
      <Text style={styles.listcompany}>{item.company}</Text>
    </View>
    </TouchableHighlight>

  );


  return (
    <View style={styles.container}>
      { selectItem && (
        <View style = {styles.detailContainer}>
          <Image source={{ uri : selectItem.picture}} style = {styles.image}/>
          <Text style={styles.name}>{selectItem.name}</Text>
          <Text style={styles.text}>ID : {selectItem._id}</Text>
          <Text style={styles.text}>Age : {selectItem.age}</Text>
          <Text style={styles.text}>Gender :{selectItem.gender}</Text>
          <Text style={styles.text}>email id : {selectItem.email}</Text>
          <Text style={styles.text}>Phone : {selectItem.phone}</Text>
          <Text style={styles.text}>Address : {selectItem.address}</Text>
        </View>
      )

      }
       

      <FlatList
      data={data}
      renderItem={renderItems}
      keyExtractor={(item) => item.id}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00838f',
    
  },
  listItem: {
    padding: 20,
    backgroundColor:'#80cbc4',
    marginTop:10,
    marginHorizontal:10,
    
    
  },
  detailContainer: {
    padding: 20,
    alignItems: "center",
    marginHorizontal:10,
    marginTop:40,
    backgroundColor:"#26a69a",
    elevation:5,
    
  },
  image: {
    height:128,
    width:128,
    borderRadius: 64,
    alignItems:"center",
  },
  name: {
    fontSize:30,
    fontWeight:"400"
  },
  text: {
    fontSize:15,
  },
  listname : {
    fontSize:20,
  },
  listcompany: {
    fontSize:10,
    
  },
  listimage:{
    height:32,
    width:32,
    borderRadius:16,
  },
});