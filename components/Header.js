import React from 'react';
import { View, Text, StyleSheet } from 'react-native'


const Header = ({ title }) => {
    return (
        <View style={styles.header}>
            <Text>{ title }</Text>
        </View>
     );
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        backgroundColor: 'powderblue',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
 
export default Header;