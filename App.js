import React from 'react';
import {View, Button} from 'react-native';

const Estilos = {
  principal: {
    paddingTop: 40,
  },
};

const botaoPressionado = () => {
  alert('Botão Pressionado');
};

const App = () => {
  const {principal} = Estilos;
  return (
    <View style={principal}>
      <Button
        onPress={botaoPressionado}
        title="CLIQUE AQUI"
        color="#AA5680"
        accessibilityLabel="clique aqui"
      />
    </View>
  );
};

export default App;
