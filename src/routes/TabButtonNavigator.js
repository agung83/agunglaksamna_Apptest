import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { CreateAktif, CreateNonAktif, ContactAktif, ContactNonAktif, HomeAktif, HomeNonActive } from '../assets/icon/'


const TabButtonNavigator = ({ isFocused, label, options, onPress, onLongPress }) => {

    const Icon = () => {
        if (label === "Home") {
            return isFocused ? <HomeAktif style={{ marginLeft: 10 }} /> : <HomeNonActive style={{ marginLeft: 10 }} />
        }

        if (label === "Create") {
            return isFocused ? <CreateAktif style={{ marginLeft: 10 }} /> : <CreateNonAktif style={{ marginLeft: 10 }} />
        }

        if (label === "Contact") {
            return isFocused ? <ContactAktif style={{ marginLeft: 10 }} /> : <ContactNonAktif style={{ marginLeft: 10 }} />
        }

    }

    return (
        <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.container}
        >

            <Icon />

            <Text style={isFocused ? styles.labelFocus : styles.labelNonFocus}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}

export default TabButtonNavigator

const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        padding: 5,
        paddingHorizontal: 40
    },
    labelFocus: {
        fontSize: 13,
        fontFamily: "Poppins-Medium",
        textAlign: 'center'
    },
    labelNonFocus: {
        fontSize: 13,
        color: 'gray',
        fontFamily: "Poppins-Medium",
        textAlign: 'center'
    }
})
