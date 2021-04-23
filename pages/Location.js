import { StatusBar } from "expo-status-bar";
import React from "react";
import { Platform } from "react-native";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableWithoutFeedback,
    SafeAreaView
} from "react-native";

export default function HeatMapLocation({ navigation, route }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.close}>
                <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                    <Image source={require('../assets/close.png')} />
                </TouchableWithoutFeedback>
            </View>
            <View style={styles.headingContainer}>
                <Text style={styles.header}>{route.params.title}</Text>
                <Text style={styles.subheader}>M.U.S.T Safety Rating</Text>
            </View>
            <View style={styles.rating}>
                <Text style={styles.ratingText}>{route.params.rating}</Text>
            </View>
            <Text style={styles.sectionHeader}>Crime Statistics</Text>
            <Text style={styles.subsectionHeader}>Most Common Crimes:</Text>
            <View style={styles.commonList}>
                {
                    route.params.crimesArray.map((item, key) => (
                        <Text key={key} style={styles.listText}>{item}</Text>
                    ))
                }
            </View>
            <Text style={styles.subsectionHeader}>Most Common Timeframes:</Text>
            <View style={styles.commonList}>
                {
                    route.params.timesArray.map((item, key) => (
                        <Text key={key} style={styles.listText}>{item}</Text>
                    ))
                }
            </View>
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 10,
        backgroundColor: "#F6F6F6",
        alignItems: "center",
        justifyContent: "space-around",
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 50
    },

    close: {
        position: 'absolute',
        right: 5
    },

    headingContainer: {
        marginTop: 50,
        alignItems: 'center'
    },

    header: {
        color: "#000",
        fontSize: 64,
        textAlign: 'center'
    },

    subheader: {
        fontSize: 28
    },

    rating: {
        borderWidth: 1,
        borderColor: '#4D2D52',
        backgroundColor: '#fff',
        borderRadius: 100,
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: {
                    width: 0,
                    height: 5
                },
                shadowOpacity: 0.8,
                shadowRadius: 100
            },
            android: {
                elevation: 12
            }
        })
    },

    ratingText: {
        fontSize: 24,
        color: '#4D2D52'
    },

    sectionHeader: {
        fontSize: 28
    },

    subsectionHeader: {
        fontSize: 22
    },

    commonList: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },

    listText: {
        width: '50%',
        fontSize: 18,
        textAlign: 'center'
    }
});
