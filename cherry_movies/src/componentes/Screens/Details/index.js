import { View,Text,Image } from "react-native"
import { useRoute } from "@react-navigation/native"
import FontAwesome from '@expo/vector-icons/FontAwesome';
import styles from "./style";




export default function Detalhes(){
   
   const route= useRoute();

    return(

    
         <View style={styles.geral}>
        <View style={styles.conteiner}>
            <Image style={{width:350, height:450, marginLeft:25, marginTop:30}} source={{uri:`https://image.tmdb.org/t/p/original${route.params.img}`}} />
            <Text style={styles.titulo}>{route.params.titulo}</Text>
            <Text>{<FontAwesome name="star-half-o" size={24} color="yellow" />}</Text>
            <Text style={styles.sinopse}>{route.params.sinopse}</Text>
        </View>
        </View>
        
    )

}