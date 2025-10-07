import React from "react";
import {View, Text, TouchableOpacity, Image, StyleSheet,FlatList} from 'react-native'
import {Feather} from '@expo/vector-icons';
import CardMovies from "../../cardMovies"
import BannerFilmes from "../../bannerFilmes"
import Header from "../../header"
import Searchbar from "../../searchbar"
import movies from "../../../../movies/filmes"
import { useState, useEffect } from "react";
import { ScrollView } from "react-native-web";

 export default function Home(){

   const[filmes, setFilmes] = useState(['']);
  
    useEffect(()=>{
  
        async function buscarFilmes(){
  
          const url = 'https://api.themoviedb.org/3/movie/now_playing?language=pt-BR&page=1';
            const options = {
                method: 'GET',
                headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYzIzYzFkYTMxMjBlMzMyYWY3NDlhY2RjZWY4OGJlNyIsIm5iZiI6MTc1NjIyNjYwMy43Mjk5OTk4LCJzdWIiOiI2OGFkZTQyYjI4YmMxODYxYTBhOWFjNmIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.JkmLEMbtrYDy-GpCuTX7UNBcPshtKc88-5SS-hN6mjU'
    }
  };
  
    const response = await fetch(url, options);
    const data = await response.json();
  
    console.log(data);

    setFilmes(data.results)
    
        }

        buscarFilmes();
  
    },[])
  

      const[filme, setFilme] = useState(['']);
     
       useEffect(()=>{
     
           async function EmBreve(){
     
            const url = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';
            const options = {
              method: 'GET',
              headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYzIzYzFkYTMxMjBlMzMyYWY3NDlhY2RjZWY4OGJlNyIsIm5iZiI6MTc1NjIyNjYwMy43Mjk5OTk4LCJzdWIiOiI2OGFkZTQyYjI4YmMxODYxYTBhOWFjNmIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.JkmLEMbtrYDy-GpCuTX7UNBcPshtKc88-5SS-hN6mjU'
              }
            };
    
     
       const response = await fetch(url, options);
       const data = await response.json();
     
       console.log(data);
   
       setFilme(data.results)
       
           }
   
           EmBreve();
     
       },[])

       return(
        <ScrollView>
        <View style ={styles.container}>
          <Header></Header>
          <Searchbar></Searchbar>
          <BannerFilmes></BannerFilmes>
          <View style = {{width:'90%'}}>
            <FlatList
            data ={filmes}
            horizontal={true}
            keyExtractor={(item) => item.id}
            renderItem={({item}) =>(
              <CardMovies titulo ={item.title} img ={item.poster_path} nota ={item.vote_average} sinopse={item.overview}> </CardMovies>
            )}
            />
          </View>
          <View style = {{width:'90%'}}>
            <FlatList
            data ={filme}
            horizontal={true}
            keyExtractor={(item) => item.id}
            renderItem={({item}) =>(
              <CardMovies titulo ={item.title} img ={item.poster_path} nota ={item.vote_average} sinopse={item.overview}> </CardMovies>
            )}
            />
          </View>
        </View>
       </ScrollView>
      );

  }
 
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#590009',
      alignItems: "center"
    }
  })
 
 