import React, { Component } from 'react'
import { Text, View, SafeAreaView, ImageBackground, Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
import bg from "./Image/bg.jpg"


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null
        }
    }

    render() {
        console.log(this.props)
        return (
            <ImageBackground style={{ width: Dimensions.get("screen").width, height: Dimensions.get('screen').height, opacity: 0.9 }} source={bg}>
                <View style={style.headerContent}>
                    <Text style={style.subtitle}>w e l c o m e  <Text style={{fontWeight: "900", color: 'lightgreen'}}>{this.props.route.params.username}</Text></Text>
                    <Text onPress={() => this.props.navigation.popToTop()} style={[style.subtitle,{padding: 10}]}>get start</Text>
                </View>
            </ImageBackground>
        )
    }
}


const style = StyleSheet.create({
    headerContent: {
        flex: 1,
        marginTop: 70,
        justifyContent: "center",
        alignItems: 'center',
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
    }
})