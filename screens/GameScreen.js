import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useStageContext } from '../context/StageContext';

const GameScreen = ({ numberSelected }) => {
    const [numberChoosed, setNumberChoosed] = useState(0);
    const [range, setRange] = useState({ low: 1, high: 100 })
    const { setStage, setGameState, gameState } = useStageContext();


    const generateRandom = (min, max) => {
        var num = Math.floor(Math.random() * (max - min + 1)) + min;
        if (numberSelected === num) {
            return generateRandom(min, max)
        }
        return num;
    }

    const handleChoosedNumber = (option) => {

        if ((range.high - range.low) <= 2) {
            setGameState((gameState) => ({ ...gameState, state: 'win' }))
            setStage('gameover')
        }

        if (option === 'low' && numberChoosed > numberSelected ||
            option === 'high' && numberChoosed < numberSelected) {
            setGameState((gameState) => ({ ...gameState, state: 'lose' }))
            setStage('gameover')
            return;
        }

        if (option === 'low') setRange((range) => ({ ...range, low: numberChoosed }))
        if (option === 'high') setRange((range) => ({ ...range, high: numberChoosed }))
    }

    useEffect(() => {
        setNumberChoosed(generateRandom(range.low, range.high))
    }, [range])

    return (
        <View style={styles.screen}>
            <View style={styles.container}>
                <Text style={styles.title}>La suposicion del oponente</Text>
                <Text style={styles.title}>{numberChoosed}</Text>
                <View style={styles.buttonContainer}>
                    <Button style={styles.button} title="Menor" onPress={() => handleChoosedNumber('low')} />
                    <Button
                        style={styles.button}
                        title="Mayor"
                        onPress={() => handleChoosedNumber('high')}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 3,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    container: {
        display: "flex",
        alignItems: "center",
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
    title: {
        padding: 20,
    },
    textInput: {
        width: 50,
        borderBottomWidth: 1,
        borderBottomColor: "red",
        padding: 10,
    },
    inputContainer: {
        width: "90%",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    buttonContainer: {
        width: "100%",
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "row",
    },
    button: {
        padding: 10,
    },
});

export default GameScreen;
