import React, { useState, useEffect, useRef } from 'react';
import { 
  StyleSheet,
  Text, 
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Importando as imagens da pasta assets
const BebendoAgua = require('../../assets/bebendoagua.jpg');
const Correndo = require('../../assets/correndo.jpg');
const Patinando = require('../../assets/patinando.jpg');

const { width } = Dimensions.get('window');

const images = [
  BebendoAgua,
  Correndo,
  Patinando
];

export default function Home() {
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => {
        const nextIndex = (prevIndex + 1) % images.length;
        if (scrollRef.current) {
          scrollRef.current.scrollTo({ x: nextIndex * width, animated: true });
        }
        return nextIndex;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.floor(contentOffsetX / width);
    setCurrentIndex(newIndex);
  };

  return (
    <View style={styles.container}>
    


     <Text style={styles.titulo}>Bem-vindo à Nossa Plataforma de Saúde Online! </Text>    
    <Text style={styles.subtitulo}>Estamos empolgados em tê-lo(a)conosco em nossa comunidade dedicada a melhorar o seu bem-estar. {'\n'}Nossa plataforma foi desenvolvidapara fa cilitar o gerenciamento da sua saúde.
    </Text>

 
    <TouchableOpacity
    style={styles.botao}
    onPress={() => navigation.navigate('SignUp')}>
    <Text style={styles.textbutton}> Avançar </Text>
    </TouchableOpacity>



      {/* Carrossel de Imagens */}
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        style={styles.carouselContainer}
      >
        {images.map((image, index) => (
          <Image key={index} source={image} style={styles.image} />
        ))}
      </ScrollView>
      <View style={styles.indicatorContainer}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              currentIndex === index ? styles.activeIndicator : undefined
            ]}
          />
        ))}
      </View>


      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('SignUp')}
      >
        <Text style={styles.textbutton}> Avançar </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

  },
  titulo: {
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 50,
    textAlign: 'center',
    color: "#47AC5D",
    paddingHorizontal: 10,
    marginHorizontal: 10,
    marginBottom: 20,
  },
  subtitulo: {

    marginTop: 10,
    textAlign: 'center',
    color: "#000",
    paddingHorizontal: 10,
    marginHorizontal: 17,
    marginBottom: 20,
  },
  carouselContainer: {
    margin: 'auto',
    padding: 'auto',
    width: '70vh',
    height: '100vh',
  },
  image: {
    width: '100vh',
    height: '50vh',
    resizeMode: 'cover',
  },
  indicatorContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 180,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#999',
    marginHorizontal: 5,
  },
  activeIndicator: {
    backgroundColor: '#fff',

  },
  botao: {
    backgroundColor: '#d9d9d9',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 30,
    width: 100,
    height: 40,
  },
  textbutton: {
    color: '#0eab6e',
    fontWeight: 'bold',
  },
});
