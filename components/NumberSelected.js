import React, {useContext} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native'



const NumberSelected = ({ number }) => {

    const StageContext = useContext();
    console.log('hol;a', StageContext);

    return (
        <View style={styles.numberSelected}>
            <Text style={styles.title}>Tu elección</Text>
            {number && <Text style={styles.title}>{number}</Text>}
            <Button title="Empezar el juego" onPress={() => { }}></Button>
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