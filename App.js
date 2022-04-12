import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import StartGame from './screens/StartGame';
import GameScreen from './screens/GameScreen';
import GameOver from './screens/GameOver';
import React, { useContext } from 'react';

import Header from './components/Header';
import { stageContext } from './context/StageContext';
import { useState } from 'react/cjs/react.production.min';

export default function App() {
  const [stage, setStage] = useState('start')
  return (
    <stageContext.Provider value={{ stage, setStage }}>
      <View style={{ flex: 1 }}>
        <Header title="Adivina el numero" />
        { stage === 'start' && <StartGame></StartGame>}
        { stage === 'game' && <GameScreen></GameScreen>}
        { stage === 'gameover' && <GameOver></GameOver>}
      </View>
    </stageContext.Provider>
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
