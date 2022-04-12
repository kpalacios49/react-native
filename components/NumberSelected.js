import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native'
import { useStageContext } from '../context/StageContext';

const NumberSelected = ({ number }) => {
    const { setStage, setGameState } = useStageContext();

    const startGame = () => {
        setGameState((gameState) => ({ ...gameState, number: number }))
        setStage('game');
    }

    return (
        <View style={styles.numberSelected}>
            <Text style={styles.title}>Tu elección</Text>
            {number && <Text style={styles.title}>{number}</Text>}
            <Button title="Empezar el juego" onPress={() => startGame()}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    numberSelected: {
        margin: 20,
        padding: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
})

export default NumberSelected