import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import NumberSelected from "../components/NumberSelected";

const StartGame = () => {
  const [numberSelected, setNumberSelected] = useState(null);
  const [numberConfirmed, setNumberConfirmed] = useState(null);

  return (
    <View style={styles.screen}>
      <View style={styles.pickerContainer}>
        <Text style={styles.title}>Comenzar juego</Text>
        <TextInput 
        style={styles.textInput} 
        keyboardType="numeric"
        onChangeText={(n) => setNumberSelected(n)}
        ></TextInput>
        <View style={styles.inputContainer}>
          <Text style={styles.title}>Elija un número</Text>
          <View style={styles.buttonContainer}>
            <Button style={styles.button} title="Limpiar" onPress={() => setNumberSelected('')} />
            <Button
              style={styles.button}
              title="Confirmar"
              onPress={() => numberSelected  ? setNumberConfirmed(numberSelected) : ''}
            />
          </View>
        </View>
      </View>
      
      {numberConfirmed && <NumberSelected number={numberConfirmed}></NumberSelected>}
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
  pickerContainer: {
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

export default StartGame;
