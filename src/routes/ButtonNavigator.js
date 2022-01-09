import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import TabButtonNavigator from './TabButtonNavigator';

const ButtonNavigator = ({ state, descriptors, navigation }) => {


    return (
        <View style={styles.container}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {

                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        // The `merge: true` option makes sure that the params inside the tab screen are preserved
                        navigation.navigate({ name: route.name, merge: true });
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TabButtonNavigator
                        key={index}
                        isFocused={isFocused}
                        label={label}
                        options={options}
                        onPress={onPress}
                        onLongPress={onLongPress}
                    />
                );
            })}
        </View>
    );
}

export default ButtonNavigator

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        // backgroundColor: "#D12D35",
        backgroundColor: "#fffefe",
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
        paddingBottom: 5,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        elevation: 12
    }
})
