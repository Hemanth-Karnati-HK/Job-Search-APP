import {useState} from 'react';
import {View, ScrollView, SafeAreaView} from 'react-native';
import {Stack, useRouter} from 'expo-router';

//import {searchTerm, setSearchTerm} from '../context/searchContext';
import {COLORS, icons,images,SIZES} from '../constants';
import {
    Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome

} from '../components'
const Home=()=>{
    const router=useRouter();
    return(
        <SafeAreaView style={{flex:1, backgroundcolor:COLORS.lightWhite}}>
        <Stack.Screen
        options={{
            headerStyle:{backgroundColor: COLORS.lightWhite},
            headerShadowVisible: false,
            headerLeft:()=>(
                <ScreenHeaderBtn iconUrl={icons.menu} dimensions="60%"/>
            ),
            headerRight:()=>(
                <ScreenHeaderBtn iconUrl={images.profile} dimensions="100%"/>
            ),
            headerTitle:""

        }} />
         <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Welcome
            /*searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
                if (searchTerm) {
                  router.push(`/search/${searchTerm}`);
                }
            }}*/

          />

          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
        </SafeAreaView>
    )
    }
    export default Home;


  /*  import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow', // Set your desired bright color here
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'blue', // Set your desired bright color here
  },
});

export default Home; */
