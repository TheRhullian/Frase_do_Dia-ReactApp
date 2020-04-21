import React from 'react';
import {View, Text} from 'react-native';

const Estilos = {
  estiloTexto: {
    fontSize: 30,
    backgroundColor: '#0850fb',
    paddingTop: 50, //TEMOS PADDING VERTICAL TAMBÉM PARA BOTTOM E TOP
    paddingLeft: 30, //TEMOS PADDING HORIZONTA TAMBÉM PARA LEFT E RIGHT
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.4,
    shadowRadius: 7,
  },

  estiloTexto_2: {
    fontSize: 30,
    backgroundColor: '#0850fb',
    paddingTop: 50, //TEMOS PADDING VERTICAL TAMBÉM PARA BOTTOM E TOP
    paddingLeft: 30, //TEMOS PADDING HORIZONTA TAMBÉM PARA LEFT E RIGHT
    marginTop: 100
  },
};

const App = () => {
  return (
    <View>
      <Text style={Estilos.estiloTexto}>RHULLIAN DAMIÃO</Text>
      <Text style={Estilos.estiloTexto_2}>MARCOS DE SIQUEIRA</Text>
    </View>
  );
};

export default App;
