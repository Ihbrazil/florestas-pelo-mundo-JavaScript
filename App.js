import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import Congo from './assets/images/floresta-congo.png';
import Taiga from './assets/images/floresta-taiga.png';
import Amazonica from './assets/images/floresta-amazonica.png';

export default function App() {
  return (
    <View style={ estilos.container }>
      <Text style={ estilos.titulo }>Florestas pelo mundo</Text>

      <Image source={ Congo } style={ estilos.img } />
      <Text style={[ estilos.margem, estilos.textoCongo ]}>Floresta do congo (África)</Text>

      <Image source={ Taiga } style={ estilos.img } />
      <Text style={[ estilos.margem, estilos.textoNorte ]}>Floresta (Hemisfério Norte)</Text>

      <Image source={ Amazonica } style={ estilos.img } />
      <Text style={[ estilos.margem, estilos.textoSul ]}>Floresta Amazônica (América do Sul)</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo: {
    fontSize: 22,
    marginBottom: 30,
    width: 280,
  },

  img: {
    width: 300,
    height: 100,
  },

  margem: {
    marginBottom: 20,
  },

  textoNorte: {
    width: 240,
  },

  textoCongo: {
    width: 230,
  },

  textoSul: {
    fontSize: 11,
    width: 260,
  }
});