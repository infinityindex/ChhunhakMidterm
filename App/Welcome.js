import React, { Component } from 'react'
import { Text, View , SafeAreaView, ImageBackground, Dimensions, StyleSheet, TouchableOpacity} from 'react-native'
import bg from "./Image/bg.jpg"
export default class Welcome extends Component {
    render() {
        return (
            // <SafeAreaView>
                <ImageBackground style={{width: Dimensions.get("screen").width, height: Dimensions.get('screen').height, opacity: 0.9}} source={bg}>
                    <View style={{flex: 0.5}} />
                    <View style={style.headerContent}>
                        <Text  style={style.title}>Welcome</Text>
                        <Text style={style.subtitle}>on the board</Text>
                    </View>
                    <View style={style.descriptionContent}>
                        <Text style={style.descriptontext}>Just the first shot of my daily ui challenge. Decided to participate to enhance my UI skills.</Text>
                    </View>
                    <View style={style.signup}>
                        <TouchableOpacity onPress={() => this.props.navigation.push("SignUp")} style={{borderRadius: 40,borderWidth: 2,borderColor: "#fff", backgroundColor: 'transparent', marginHorizontal: 70, height: 70, justifyContent: 'center'}}>
                            <Text style={style.btnsignin}>signup</Text>
                        </TouchableOpacity>
                        <View style={{marginTop: 10}}>
                            <Text style={{textAlign: "center", color: "#fff"}}>Have an account? Cool!</Text>
                            <Text onPress={() => this.props.navigation.navigate("Login")} style={{textAlign: "center", color: "#fff", textDecorationLine: 'underline'}}>Log in then!</Text>
                        </View>
                    </View>
                    <View style={{flex: 0.5}} />
                </ImageBackground>
            // </SafeAreaView>
        )
    }
}

const style = StyleSheet.create({
    headerContent:{
        flex: 1,
        marginTop: 70
    },
    title: {
        textAlign: "center",
        fontSize: 32,
        fontWeight: "700",
        color: "#fff",
        textTransform: "uppercase"
    },
    subtitle:{
        textAlign: "center",
        fontSize: 16,
        fontWeight: "700",
        color: "#fff",
        textTransform: "uppercase"
    },
    descriptionContent:{
        flex: 1,
    },
    descriptontext:{
        textAlign: "center",
        color: "#fff",
        fontSize: 18,
        paddingHorizontal: 20
    },
    signup:{
        flex: 1
    },
    btnsignin: {
        textAlign: "center",
        fontSize: 16,
        fontWeight: "700",
        color: "#fff",
        textTransform: "uppercase"
    }
})