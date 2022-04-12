import { StyleSheet, Text, View, Image } from 'react-native';
import react, {useState} from 'react';
import StartGame from './screens/StartGame';
import GameScreen from './screens/GameScreen';
import GameOver from './screens/GameOver';
import React, { useContext } from 'react';

import Header from './components/Header';
import { StageContext } from './context/StageContext';

export default function App() {
  const [stage, setStage] = useState('start');
  const [gameState, setGameState] = useState({
    number: null,
    tries: 0,
    state: 'win'
  });

  return (
    <StageContext.Provider value={{stage, setStage, gameState, setGameState}}>
      <View style={{ flex: 1 }}>
        <Header title="Adivina el numero" />
        { stage === 'start' && <StartGame></StartGame>}
        { stage === 'game' && <GameScreen></GameScreen>}
        { stage === 'gameover' && <GameOver></GameOver>}
      </View>
    </StageContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
