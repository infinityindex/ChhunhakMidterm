import React, { Component } from 'react'
import { Text, View, SafeAreaView, ImageBackground, Dimensions, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import bg from "./Image/bg.jpg"
import { TextInput } from 'react-native-gesture-handler'


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null
        }
    }

    render() {
        return (
            <ImageBackground style={{ width: Dimensions.get("screen").width, height: Dimensions.get('screen').height, opacity: 0.9 }} source={bg}>
                <View style={{ flex: 0.5 }} />
                <View style={style.headerContent}>
                    <Text style={style.title}>Log in</Text>
                    <Text style={style.subtitle}>t o  c o n t i n u e</Text>
                </View>
                <View style={style.descriptionContent}>
                    <TextInput placeholder="Username" placeholderTextColor="#fff" autoCorrect={false} style={{ borderBottomWidth: 1, borderBottomColor: "#fff", marginHorizontal: 40, paddingVertical: 10, marginVertical: 5, color: "#fff" }} />
                    <TextInput placeholder="Password" placeholderTextColor="#fff" autoCorrect={false} secureTextEntry={true} style={{ borderBottomWidth: 1, borderBottomColor: "#fff", marginHorizontal: 40, paddingVertical: 10, marginVertical: 5, color: "#fff" }} />
                </View>
                    <TouchableOpacity onPress={() => Alert.alert("Username & password is not found")} style={{ borderRadius: 40, borderWidth: 2,borderColor: '#fff', opacity: 1, backgroundColor: 'transparent', marginHorizontal: 70, height: 70, justifyContent: 'center' }}>
                        <Text style={style.btnsignin}>Log in</Text>
                    </TouchableOpacity>
                <View style={{ flex: 1 }} />
            </ImageBackground>
        )
    }
}


const style = StyleSheet.create({
    headerContent: {
        flex: 1,
        marginTop: 70
    },
    title: {
        textAlign: "center",
        fontSize: 36,
        fontWeight: "900",
        color: "#fff",
        textTransform: "uppercase"
    },
    subtitle: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: "700",
        color: "#fff",
        textTransform: "uppercase"
    },
    descriptionContent: {
        flex: 1,
    },
    descriptontext: {
        textAlign: "center",
        color: "#fff",
        fontSize: 18,
        paddingHorizontal: 20
    },
    signup: {
        flex: 1
    },
    btnsignin: {
        textAlign: "center",
        fontSize: 16,
        fontWeight: "500",
        color: "#fff",
        textTransform: "uppercase"
    }
})