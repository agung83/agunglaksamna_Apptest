import React, { useState } from 'react'
import { Dimensions, FlatList, Image, StyleSheet, Text, ActivityIndicator, TouchableOpacity, View, Alert, } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { Header } from '../../components/Home'
import { fetchDataContact } from "../../redux/modules/getcontact/action"
import { DeleteContactAction } from "../../redux/modules/deletecontact/action"



const { width, height } = Dimensions.get("screen");
const cardContactWidth = width / 2 - 20;
const cardContactHeight = height / 2 - 20

const Home = ({ navigation, route }) => {
    const [isFetching, setIsFetching] = useState(false);
    const dispatch = useDispatch()
    const { Response, Loading, Error, Message } = useSelector(state => state.GetContactReducer)
    const { MessageDelete, LoadingDelete, ErrorDelete, SuccessDelete } = useSelector(state => state.DeleteContactReducer)

    // console.log(MessageDelete)
    React.useEffect(() => {

        const getDataContact = () => {
            dispatch(fetchDataContact())
        }

        getDataContact()
    }, [dispatch])

    const onRefresh = () => {
        setIsFetching(true);
        dispatch(fetchDataContact())
        Loading === false ? setIsFetching(false) : setIsFetching(true);
    };

    const deletedDataContact = (id) => {
        Alert.alert(
            "Are you sure you want to delete data?",
            "Data will be lost on our database",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "Yeah", onPress: () => {
                        dispatch(DeleteContactAction(id))
                    }
                }
            ]
        );

    }


    const CardFlatlist = ({ item }) => {
        return (
            <View style={styles.cardContacts}>
                <View style={{ alignItems: 'center', top: -20 }}>
                    <Image
                        style={{
                            width: 100,
                            height: 100,
                            borderRadius: 120,
                            resizeMode: "cover"
                        }}
                        source={{ uri: item.photo !== "N/A" ? item.photo : "https://kalbemed.com/storage/profiles/default.png" }}
                    />
                    <View style={{ top: 5 }}>
                        <Text style={{ fontSize: 13, fontFamily: "Poppins-Bold" }}>{item.firstName} {item.lastName}</Text>
                        <Text style={{ fontSize: 13, fontFamily: "Poppins-Medium" }}>Age : {item.age}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <TouchableOpacity onPress={() => navigation.navigate("Details", item)} style={styles.updateBtn}>
                        <Text style={{ fontSize: 12, fontFamily: "Poppins-Regular" }}>Update</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={deletedDataContact} style={styles.deleteBtn}>
                        <Text style={{ fontSize: 12, fontFamily: "Poppins-Regular" }}>Delete</Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <TouchableOpacity onPress={() => navigation.navigate("DetailsData", item)} style={styles.detailsBtn}>

                        <Text style={{ fontSize: 12, fontFamily: "Poppins-Regular" }}>Detail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )

    }

    return (
        <View>
            <Header />
            {
                SuccessDelete ? <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 12, fontFamily: "Poppins-Regular" }}>{MessageDelete}</Text>
                </View> : null
            }
            {
                LoadingDelete ? <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 12, fontFamily: "Poppins-Regular" }}>{MessageDelete}</Text>
                </View> : null
            }
            {
                ErrorDelete ? <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 12, fontFamily: "Poppins-Regular" }}>{MessageDelete}</Text>
                </View> : null
            }
            <View style={styles.containerHome} >

                <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 10, marginBottom: 10 }}>
                    <Text style={{ fontSize: 12, fontFamily: "Poppins-Regular" }}>{Message}</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Create")}
                        style={{ backgroundColor: "#CED2FC", paddingHorizontal: 10, paddingVertical: 3, borderRadius: 10 }}
                    >
                        <Text style={{ fontSize: 13, fontFamily: "Poppins-Regular" }}>Create New Contact</Text>
                    </TouchableOpacity>
                </View>
                {
                    Loading ? <ActivityIndicator size="large" color="#CED2FC" /> : <FlatList
                        contentContainerStyle={{ paddingBottom: 550 }}
                        showsVerticalScrollIndicator={false}
                        numColumns={2}
                        refreshing={isFetching}
                        onRefresh={onRefresh}
                        data={Response}
                        renderItem={({ item }) => <CardFlatlist item={item} />}
                    />
                }
            </View>

        </View>
    )
}




export default React.memo(Home)

const styles = StyleSheet.create({
    containerHome: {
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    cardContacts: {
        height: 220,
        width: cardContactWidth,
        marginHorizontal: 5,
        borderRadius: 10,
        marginTop: 25,
        elevation: 1,
        backgroundColor: "white"
    },
    updateBtn: {
        padding: 10,
        backgroundColor: "#CED2FC",
        paddingVertical: 5,
        borderRadius: 20,
        alignItems: 'center'
    },
    deleteBtn: {
        marginLeft: 10,
        padding: 10,
        backgroundColor: "#CED2FC",
        paddingVertical: 5,
        borderRadius: 20,
        alignItems: 'center'
    },
    detailsBtn: {
        padding: 10,
        backgroundColor: "#CED2FC",
        paddingVertical: 5,
        borderRadius: 20,
        alignItems: 'center'
    }

})
