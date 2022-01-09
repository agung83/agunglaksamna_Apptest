import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList, Image, Dimensions, TouchableOpacity, TouchableHighlight } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector, useDispatch } from 'react-redux'
import { fetchDataContact } from "../../redux/modules/getcontact/action"


const { width, height } = Dimensions.get("screen");
const cardContactWidth = width;
const Contact = () => {
    const [isFetching, setIsFetching] = useState(false);
    const { Response, Loading, Error, Message } = useSelector(state => state.GetContactReducer)
    const dispatch = useDispatch()

    const onRefresh = () => {
        setIsFetching(true);
        dispatch(fetchDataContact())
        Loading === false ? setIsFetching(false) : setIsFetching(true);
    };

    const CardFlatlist = ({ item }) => {
        return (
            <TouchableHighlight>
                <View style={styles.cardContacts}>
                    <View style={{ flexDirection: "row" }}>
                        <Image
                            style={{
                                marginHorizontal: 20,
                                top: -10,
                                width: 70,
                                height: 70,
                                borderRadius: 100,
                                resizeMode: "cover"
                            }}
                            source={{ uri: item.photo !== "N/A" ? item.photo : "https://kalbemed.com/storage/profiles/default.png" }}
                        />
                        <View style={{ paddingHorizontal: 20, width: cardContactWidth }}>
                            <Text style={{ fontSize: 13, fontFamily: "Poppins-Bold" }}>Name : {item.firstName} {item.lastName}</Text>
                            <Text style={{ fontSize: 13, fontFamily: "Poppins-Medium" }}>Age : {item.age}</Text>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        )

    }

    return (
        <SafeAreaView>
            <FlatList
                contentContainerStyle={{ paddingBottom: 20 }}
                showsVerticalScrollIndicator={false}
                refreshing={isFetching}
                onRefresh={onRefresh}
                data={Response}
                renderItem={({ item }) => <CardFlatlist item={item} />}
            />
        </SafeAreaView>
    )
}

export default Contact

const styles = StyleSheet.create({
    cardContacts: {
        marginHorizontal: 10,
        borderRadius: 20,
        marginTop: 30,
        elevation: 0.7,
        backgroundColor: "#fdfdfd"
    },
})
