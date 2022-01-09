import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, TouchableHighlight, ScrollView, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch, useSelector } from 'react-redux'
import { CreateIconSplash, UserInput } from '../../assets/icon'
import { SaveContactAction } from "../../redux/modules/createcontact/action"

const Create = ({ navigation, route }) => {
    const { Message } = useSelector(state => state.CreateContactReducer)

    const dispatch = useDispatch()

    const [dataSave, setSave] = useState({
        "firstName": "",
        "lastName": "",
        "age": "",
        "photo": "http://vignette1.wikia.nocookie.net/lotr/images/6/68/Bilbo_baggins.jpg/revision/latest?cb=20130202022550"
    })

    const SubmitedData = () => {
        if (dataSave.firstName === "") {
            alert(`firstName is required`)
            return false
        }
        if (dataSave.lastName === "") {
            alert(`lastName is required`)
            return false
        }
        if (dataSave.age === "") {
            alert(`Age is required`)
            return false
        }
        dispatch(SaveContactAction(dataSave))
        setSave(value => ({ ...value, firstName: "", lastName: "", age: "" }))
        navigation.goBack()

    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.first}>
                    <CreateIconSplash width={270} />
                    <Text style={styles.title}>{"Saved New Data"}</Text>
                    <Text style={{ top: -15, fontSize: 16, fontFamily: "Poppins-Regular" }}>{Message}</Text>
                </View>

                <View style={styles.form}>
                    <View style={styles.input}>
                        <UserInput style={{ top: 10 }} />
                        <TextInput
                            style={{ flex: 1 }}
                            onChangeText={(textValue) => setSave(value => ({ ...value, firstName: textValue }))}
                            placeholder="First Name"
                            value={dataSave.firstName}
                        />
                    </View>
                    <View style={styles.input}>
                        <UserInput style={{ top: 10 }} />
                        <TextInput
                            onChangeText={(textValue) => setSave(value => ({ ...value, lastName: textValue }))}
                            style={{ flex: 1 }}
                            placeholder="Last Name"
                            value={dataSave.lastName}
                        />
                    </View>
                    <View style={styles.input}>
                        <UserInput style={{ top: 10 }} />
                        <TextInput
                            style={{ flex: 1 }}
                            onChangeText={(textValue) => setSave(value => ({ ...value, age: textValue }))}
                            placeholder="Age"
                            value={dataSave.age}
                            keyboardType='numeric'
                        />
                    </View>


                    <View style={styles.containerBtn}>
                        <TouchableOpacity onPress={SubmitedData} style={styles.button}>
                            <Text style={styles.textBtn}>Go To Save</Text>
                        </TouchableOpacity>

                    </View>
                </View>

            </View>
        </SafeAreaView>
    )
}

export default Create

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingBottom: 10,
    },
    title: {
        textAlign: 'center',
        fontSize: 19,
        color: "#464646",
        marginTop: 10,
        marginBottom: 20,
        fontFamily: "Poppins-Bold"
    },
    first: {
        alignItems: 'center',
    },
    form: {
        backgroundColor: 'white',
        elevation: 12,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 10,
        paddingBottom: 150,
    },
    input: {
        flexDirection: 'row',
        height: 45,
        margin: 12,
        backgroundColor: '#F9F9FF',
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderRadius: 10,
        borderBottomWidth: 0.4,
        borderColor: "black",
    },
    containerBtn: {
        paddingVertical: 20
    },
    button: {
        height: 45,
        margin: 12,
        backgroundColor: '#CED2FC',
        padding: 10,
        justifyContent: 'center',
        borderRadius: 10
    },
    textBtn: {
        textAlign: 'center',
        color: 'white',
        fontFamily: "Poppins-Medium"
    },

})