import React, {useState, useEffect} from 'react';
import {SafeAreaView,Text,ScrollView,Image,TouchableOpacity,TextInput,ImageBackground, View, FlatList} from 'react-native';
import {styles} from '../assets/css/styles';

const Digimon = props => 
{
  const [digimons, setDigimons] = useState([]);
  const [searchfeild, setSearchfeild] = useState('');

  useEffect(() => {
    fetchDigimons();
  }, []);

  const fetchDigimons = () => {
    fetch('https://digimon-api.vercel.app/api/digimon')
      .then(response => response.json())
      .then(digimons => setDigimons(digimons));
  };

  return (

    <ImageBackground source={require('../assets/fundoMaisClaro.jpeg')} style={styles.imageBackground}>
      <View style={styles.TextoDet1}>
        <TextInput style={styles.button2}
          placeholder="Buscar pelo Nome ou Level"
          onChangeText={value => setSearchfeild(value)}
          value={searchfeild}
        />
      </View>

      <ScrollView style={styles.AlinhamentoTd}>
        <SafeAreaView style={styles.container2}>
          {digimons.filter(digimon => digimon.name.toLowerCase().includes(searchfeild.toLowerCase())
            )
            .map((digimon, index) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.5}
                  key={index}
                  style={styles.card}
                  onPress={() => alert(digimon.level)
                     }>
                   <Text style={styles.Textotd1}>{digimon.name}</Text>
                   <Image source={{uri: digimon.img}} style={styles.imagemTd}/>
                </TouchableOpacity>
              );
            })}

            {digimons.filter(digimon => digimon.level.toLowerCase().includes(searchfeild.toLowerCase())
            )
            .map((digimon, index) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.5}
                  key={index}
                  style={styles.card}
                  onPress={() => alert(digimon.level)
                     }>
                   <Text style={styles.Textotd1}>{digimon.name}</Text>
                   <Image source={{uri: digimon.img}} style={styles.imagemTd}/>
                </TouchableOpacity>
              );
            })}
        </SafeAreaView>
      </ScrollView>
      </ImageBackground>
  );
};

export default Digimon;