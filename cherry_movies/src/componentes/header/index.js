import React from   'react'
import {View,Text,TouchableOpacity} from 'react-native'
import {Feather} from '@expo/vector-icons';
import styles from './style.js'


export default function Header(){

    return(
            <View style = {styles.viewHeader}>

                <TouchableOpacity>  

                <Feather style ={{marginLeft:-70}} name = 'menu' size= {36} color = "#FFFF" />

                </TouchableOpacity>
                
                <Text style={styles.textHeader}>CHERRY MOVIES 🎬🍒</Text>
            
            </View>
    );

}