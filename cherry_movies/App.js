import React from "react";

import {View, Text, TouchableOpacity, Image, StyleSheet,FlatList} from 'react-native'
import {Feather} from '@expo/vector-icons';
import CardMovies from "./src/componentes/cardMovies"
import BannerFilmes from "./src/componentes/bannerFilmes"
import Header from "./src/componentes/header"
import Searchbar from "./src/componentes/searchbar"
import movies from "./movies/filmes"
import Routes from "./src/componentes/Routes";


 export default function app(){

 
    return(
    
      
        <Routes></Routes>
     
    );
  }
 
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#730101',
      alignItems: "center"
      
    }
  })
 