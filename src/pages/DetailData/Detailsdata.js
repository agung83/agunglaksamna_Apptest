import React from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { UserInput } from '../../assets/icon'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDataContactById } from '../../redux/modules/getcontactbyid/action'



const Detailsdata = ({ navigation, route }) => {
    const detailsData = route.params
    const id = route.params.id
    const dispatch = useDispatch()
    const { Response } = useSelector(state => state.GetContactByIdReducer)

    React.useEffect(() => {
        const getContactById = () => {
            dispatch(fetchDataContactById(id))
        }
        getContactById()
    }, [id])

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.first}>
                    <Image
                        style={{
                            marginHorizontal: 20,
                            width: 180,
                            height: 180,
                            borderRadius: 100,
                            resizeMode: "cover"
                        }}
                        source={{ uri: detailsData.photo }}
                    />
                    <Text style={styles.title}>{detailsData.firstName} {detailsData.lastName}</Text>
                </View>

                <View style={styles.form}>
                    <View style={styles.input}>
                        <UserInput style={{ top: 10 }} />
                        <TextInput
                            style={{ flex: 1, fontSize: 14, fontFamily: "Poppins-Regular" }}
                            placeholder="First Name"
                            editable={false}
                            value={Response.firstName}
                        />
                    </View>
                    <View style={styles.input}>
                        <UserInput style={{ top: 10 }} />
                        <TextInput
                            style={{ flex: 1, fontSize: 14, fontFamily: "Poppins-Regular" }}
                            placeholder="Last Name"
                            editable={false}
                            value={Response.lastName}
                        />
                    </View>
                    <View style={styles.input}>
                        <UserInput style={{ top: 10 }} />
                        <TextInput
                            style={{ flex: 1, fontSize: 13, fontFamily: "Poppins-Regular" }}
                            placeholder="Age"
                            editable={false}
                            keyboardType='numeric'
                            value={`${Response.age}`}
                        />
                    </View>
                    <View style={styles.containerBtn}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
                            <Text style={styles.textBtn}>Back Again</Text>
                        </TouchableOpacity>

                    </View>
                </View>

            </View>
        </SafeAreaView>
    )
}

export default Detailsdata

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
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
        padding: 10,
        paddingBottom: 150,
    },
    input: {
        flexDirection: 'row',
        height: 45,
        margin: 12,
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderRadius: 10,
        borderBottomWidth: 0.4,
        borderColor: "black",
        backgroundColor: '#F9F9FF',
    },
    containerBtn: {
        paddingVertical: 20
    },
    button: {
        height: 45,
        margin: 12,
        backgroundColor: '#b4baff',
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