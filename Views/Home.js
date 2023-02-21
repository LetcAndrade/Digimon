import React, { useState, useEffect } from 'react';
import {TouchableOpacity, ImageBackground, StyleSheet, Text, View,TextInput, KeyboardAvoidingView } from 'react-native';
import { styles } from '../assets/css/styles';



export default function Home({navigation}) {
  const [name, setName] = useState(null);
  const [level, setLevel] = useState(null);

  return (
    <View style={styles.container}>
    <ImageBackground source={require('../assets/fundoClaro.jpeg')} style={styles.imageBackground}>
      <Text style={styles.text}>Digimon</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Inicio')}>
                        <Text style={styles.buttonText}>Visualizar Todos Digimons</Text>
      </TouchableOpacity>
    </ImageBackground>
  </View>
  );
}
