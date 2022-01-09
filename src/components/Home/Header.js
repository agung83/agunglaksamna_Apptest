import React, { memo, useState } from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { UserProfile, SearchIcon, SortIcon, IconWidget } from '../../assets/icon'

const kategori = [
    {
        id: 1,
        name: "Bilbo Baggins",
    },
    {
        id: 2,
        name: "Luke Skywalker",

    },
    {
        id: 3,
        name: "Agung Laksmana",

    },
    {
        id: 4,
        name: "Cristiano",
    }
]

const Header = ({ filter }) => {
    const [selectedCategoryIndex, setselectedCategoryIndex] = useState(0)

    const ListCategories = () => {
        return <ScrollView horizontal showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoryList}
        >
            {
                kategori.map((pecah, key) => (
                    <TouchableOpacity key={key} activeOpacity={0.8}
                        onPress={() => setselectedCategoryIndex(key)}
                    >
                        <View style={{
                            backgroundColor: selectedCategoryIndex == key ? "#CED2FC" : "#ECEEFF",
                            ...styles.categoryBtn
                        }}>

                            <View style={styles.cattegoryImg}>
                                <Image
                                    style={{
                                        paddingHorizontal: 5,
                                        width: 25,
                                        height: 25,
                                        resizeMode: 'cover'
                                    }}
                                    source={require('../../assets/png/iconwidget.png')}
                                />
                            </View>
                            <Text style={
                                {
                                    fontSize: 10,
                                    fontFamily: "Poppins-Medium",
                                    marginLeft: 5,
                                    color: selectedCategoryIndex == key ? "black" : "grey"
                                }
                            }>{pecah.name}</Text>
                        </View>
                    </TouchableOpacity>
                ))
            }
        </ScrollView>
    }


    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.firtsProfile}>
                    <View style={styles.placeAddrres}>
                        <View style={styles.iconPlace} >
                            <Text style={{ fontSize: 20, fontFamily: "Poppins-Medium", }}>Hallo, </Text>
                            <Text style={{ fontSize: 20, fontFamily: "Poppins-Bold", }}>Agung</Text>
                        </View>
                    </View>
                    <View>
                        <UserProfile />
                    </View>

                </View>
                <Text style={{ fontSize: 20, color: "#908E8C", fontFamily: "Poppins-Regular", }}>What do you want today</Text>
                <View style={{ flexDirection: "row" }}>
                    <View style={styles.inputContainer}>
                        <SearchIcon style={{ top: 10 }} />
                        <TextInput placeholder='Search For Contact' style={{ flex: 1 }} />
                    </View>
                    <TouchableOpacity>
                        <View style={styles.SortContainer}>
                            <SortIcon style={{ top: 10 }} />
                        </View>
                    </TouchableOpacity>
                </View>
                <ListCategories />


            </View>
        </SafeAreaView>
    )
}

export default memo(Header)

const styles = StyleSheet.create({
    container: {
        top: 7,
        backgroundColor: "#ffffff",
        paddingHorizontal: 10,
        paddingVertical: 15,

    },
    firtsProfile: {
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    placeAddrres: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    iconPlace: {
        flexDirection: "row"
    },
    inputContainer: {
        top: 30,
        flexDirection: "row",
        paddingHorizontal: 10,
        paddingVertical: 5,
        height: 50,
        width: 280,
        backgroundColor: "#DFE2FF",
        borderRadius: 8
    },
    SortContainer: {
        top: 30,
        marginLeft: 4,
        flexDirection: "row",
        paddingHorizontal: 8,
        height: 50,
        backgroundColor: "#CED2FC",
        borderRadius: 8
    },
    categoryList: {
        top: 20,
        paddingVertical: 30,
        alignItems: 'center',
        paddingHorizontal: 1,
    },
    categoryBtn: {
        height: 35,
        width: 120,
        marginRight: 7,
        borderRadius: 20,
        alignItems: "center",
        paddingHorizontal: 5,
        flexDirection: "row"
    },
    cattegoryImg: {
        height: 30,
        width: 30,
        backgroundColor: "white",
        justifyContent: "center",
        borderRadius: 25,
    }
})
