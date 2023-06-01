import {useState} from 'react';
import {Stack, useRouter} from 'expo-router';
import { View, 
  Text,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity
} from 'react-native';

import styles from './welcome.style';
import {icons, SIZES} from '../../../constants';
const jobTypes=["Full Time", "Part Time", "Contractor"];

const Welcome = ({searchTerm, setSearchTerm, handleClick}) => {
  const router = useRouter();
  const[activeJobType, setActiveJobType] = useState("Full Time");
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Home hem</Text>
        <Text style={styles.WelcomesMessage}>find your perfect job</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput style={styles.searchInput} 
          value={searchTerm}
          onChange={(text)=>setSearchTerm(text)}
          placeholder="What are looking for?"/>

        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image
          source={icons.search}
          resizeMode="contain"
          style={styles.searchBtnImage}
           />
           </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
        data={jobTypes} 
        renderItem={({item})=>(
          <TouchableOpacity style={styles.tab(activeJobType,item)} onPress={()=>{
            setActiveJobType(item);
            router.push(`/search/${item}`)
          }}>
            <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity> )}
            keyExtractor={item=>item}
            contentContainerStyle={{columnGap: SIZES.small}}
            horizontal
        />
        
      </View>

    </View>
  )
}

export default Welcome