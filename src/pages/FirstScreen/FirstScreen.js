import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, TouchableHighlight } from 'react-native'
import { FirsScreenIcon } from '../../assets/icon'

const FirstScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <View style={styles.first}>
                <FirsScreenIcon width={270} />
                <Text style={styles.title}>Welcome to agung laksmana app test</Text>
                <Text style={styles.text}>
                    You don't have the power to go back and change the past, but you do have the power to start where you are now and change the future</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Appload')} style={styles.buttonLihat}>
                <Text style={styles.textLihat}>Get Started</Text>
            </TouchableOpacity>
        </View>
    )
}

export default FirstScreen

const styles = StyleSheet.create({
    container: {
        paddingTop: 100,
        paddingBottom: 60,
    },
    title: {
        textAlign: 'center',
        fontSize: 22,
        fontFamily: "Poppins-Bold",
        color: "#464646",
        marginTop: 10,
        marginBottom: 20
    },
    first: {
        alignItems: 'center',
    },
    text: {
        padding: 20,
        textAlign: 'center',
        fontSize: 14,
        color: "#7B7B7B",
        fontFamily: "Poppins-Regular"
    },
    buttonLihat: {
        height: 45,
        margin: 12,
        backgroundColor: 'transparent',
        padding: 10,
        justifyContent: 'center',
        borderRadius: 10,
        borderColor: '#adb3ff',
        borderWidth: 1

    },
    textLihat: {
        textAlign: 'center',
        color: '#848eff',
        fontWeight: 'bold'
    },
})