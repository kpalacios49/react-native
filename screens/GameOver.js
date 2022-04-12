import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const GameOver = ({ option }) => {

    return (
        <View style={styles.screen}>
            {option == 'win' ? (
                <>
                    <Image
                        style={{ width: '100%', height: '50%' }}
                        source={{ uri: 'https://media2.giphy.com/media/o75ajIFH0QnQC3nCeD/giphy.gif?cid=ecf05e4764znwxff4dc1vm1kqcm6e7a1gr8u4r2aevd9tslv&rid=giphy.gif&ct=g' }}
                    ></Image>
                    <Text>Ganaste</Text>
                </>
            ) : (
                <Image
                    style={{ width: '100%', height: '50%' }}
                    source={{ uri: 'https://media4.giphy.com/media/eJ4j2VnYOZU8qJU3Py/giphy.gif?cid=ecf05e479iyj74biqtacljl5wufaeg0jwotkqa9cap78pqn2&rid=giphy.gif&ct=g' }}
                ></Image>
            )}


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
});

export default GameOver;
