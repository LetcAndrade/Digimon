import { StyleSheet } from "react-native";
import Constants from 'expo-constants';const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: "column"
      },
      container2: {
        flex: 1,
        margin:10,
        flexDirection:'row',
        alignItems: "center",
      },
      imageBackground: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center",
      },
      text: {
        color: "#6A6565",
        fontSize: 64,
        fontWeight: "bold",
        textAlign: "center",
      },

      button:
    {
      backgroundColor: "#BFE8FF",
      padding: 15,
      alignSelf: "center",
      borderRadius:25,
      marginVertical:65,
      width:300,
    },

     button2:
    {
      backgroundColor: "#BFE8FF",
      padding: 15,
      alignSelf: "center",
      borderRadius:25,
      width:250,
    },
    espaco:
    {
     marginVertical: 45,
    },
  
    buttonText:
    {
      fontWeight: "Regular",
      fontSize: 22,
      color:"#6A6565",
      alignSelf: "center",
    },
    
    input:
    {
      backgroundColor: "#BFE8FF",
      fontSize: 19,
      padding: 9,
      marginBottom: 35,
      width:300,
    },

    imagemTd:
    {
        width: 350,
        height: 350,
        resizeMode: 'stretch',
        borderRadius:35,
        marginLeft:20,
        marginRight:45,
    },

    Textotd1:
    {
        fontWeight: "bold",
        fontSize: 20,
        color:"#6A6565",
        alignSelf: "center", 
        margin:10,
    },
    Textotd:
    {
        fontWeight: "Regular",
        fontSize: 20,
        color:"#6A6565",
        alignSelf: "center",  
        marginBottom:35,
    },

    AlinhamentoTd:
    {
        flex: 1,
        marginTop:1,
        flexDirection: "row",
    
    },

    imagemDet:
    {
        width: 350,
        height: 350,
        resizeMode: 'stretch',
        borderRadius:35    
    },

    TextoDet:
    {
        fontWeight: "bold",
        fontSize: 40,
        color:"#6A6565",
        alignSelf: "center", 
        margin:8,
        marginTop:60
    },
    TextoDet1:
    {
        fontWeight: "Regular",
        fontSize: 35,
        color:"#6A6565",
        alignSelf: "center",  
        marginBottom:45,
        margin:9,
    },

    TextoDet1:
    {
  
        alignSelf: "center",
        marginTop:95
       
    },

  
  });

  export{styles};