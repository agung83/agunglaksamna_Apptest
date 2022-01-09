import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, TouchableHighlight, ScrollView, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StarterIcon, UserInput } from '../../assets/icon'
import { useDispatch, useSelector } from 'react-redux'
import { UpdateContactAction } from "../../redux/modules/updatecontact/action"
const Details = ({ navigation, route }) => {
    const detailsData = route.params
    const id = route.params.id
    const dispatch = useDispatch()
    const { Status, Loading, Message, Error } = useSelector(state => state.UpdateContactReducer)

    const [detailsUpdate, setUpdate] = useState({
        "firstName": detailsData.firstName,
        "lastName": detailsData.lastName,
        "age": detailsData.age,
        "photo": "http://vignette1.wikia.nocookie.net/lotr/images/6/68/Bilbo_baggins.jpg/revision/latest?cb=20130202022550"
    })



    const SubmitedData = () => {
        if (detailsUpdate.firstName === "") {
            alert(`firstName is required`)
            return false
        }
        if (detailsUpdate.lastName === "") {
            alert(`lastName is required`)
            return false
        }
        if (detailsUpdate.age === "") {
            alert(`Age is required`)
            return false
        }
        dispatch(UpdateContactAction(detailsUpdate, id))
        navigation.goBack()
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.first}>
                    <StarterIcon width={270} />
                    <Text style={styles.title}>Update Data {detailsData.firstName} {detailsData.lastName}</Text>
                    <Text style={{ top: -15, fontSize: 16, fontFamily: "Poppins-Regular" }}>{Message}</Text>
                </View>

                <View style={styles.form}>
                    <View style={styles.input}>
                        <UserInput style={{ top: 10 }} />
                        <TextInput
                            style={{ flex: 1, fontSize: 13, fontFamily: "Poppins-Regular" }}
                            placeholder="First Name"
                            onChangeText={(textValue) => setUpdate(value => ({ ...value, firstName: textValue }))}
                            value={detailsUpdate.firstName}
                        />
                    </View>
                    <View style={styles.input}>
                        <UserInput style={{ top: 10 }} />
                        <TextInput
                            style={{ flex: 1, fontSize: 13, fontFamily: "Poppins-Regular" }}
                            placeholder="Last Name"
                            onChangeText={(textValue) => setUpdate(value => ({ ...value, lastName: textValue }))}
                            value={detailsUpdate.lastName}
                        />
                    </View>
                    <View style={styles.input}>
                        <UserInput style={{ top: 10 }} />
                        <TextInput
                            style={{ flex: 1, fontSize: 13, fontFamily: "Poppins-Regular" }}
                            placeholder="Age"
                            keyboardType='numeric'
                            onChangeText={(textValue) => setUpdate(value => ({ ...value, age: textValue }))}
                            value={`${detailsUpdate.age}`}
                        />
                    </View>


                    <View style={styles.containerBtn}>
                        <TouchableOpacity onPress={SubmitedData} style={styles.button}>
                            <Text style={styles.textBtn}>Go To Update</Text>
                        </TouchableOpacity>

                    </View>
                </View>

            </View>
        </SafeAreaView>
    )
}

export default Details

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingBottom: 10,
    },
    title: {
        textAlign: 'center',
        fontSize: 19,
        fontFamily: "Poppins-Bold",
        color: "#464646",
        marginTop: 10,
        marginBottom: 20
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