import React, { Component } from 'react'
import { Text, View, SafeAreaView, ImageBackground, Dimensions, StyleSheet, TouchableOpacity, toa, Alert } from 'react-native'
import bg from "./Image/bg.jpg"
import { TextInput } from 'react-native-gesture-handler'


export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            email: null,
            password: null,
            attempt: false
        }
    }

    getUserName(txt) {
        this.setState({ username: txt })
    }
    getEmail(txt) {
        this.setState({ email: txt })
    }
    getPassword(txt) {
        this.setState({ password: txt })
    }

    isEmpty(obj) {
        for (var key in obj) {
            if (obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }

    onSubmit() {
        const { username, email, password } = this.state;
        if(this.checkEmail(email) == true){
            return;
        }
        this.isEmpty(username) == true || this.isEmpty(email) == true || this.isEmpty(password) == true ?
            this.setState({ attempt: true }) : this.props.navigation.push("Home",{username: username})
    }
    checkEmail(email){
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(email) === false) {
            this.setState({ attempt: true })
            Alert.alert("Email is invalid!")
            return true;
        }else{
            return false
        }
    }
    render() {
        const { username, email, password, attempt } = this.state;
        return (
            <ImageBackground style={{ width: Dimensions.get("screen").width, height: Dimensions.get('screen').height, opacity: 0.9 }} source={bg}>
                <View style={{ flex: 0.5 }} />
                <View style={style.headerContent}>
                    <Text style={style.title}>s i g n  u p</Text>
                    <Text style={style.subtitle}>t  o   c  o  n  t  i  n  u  e</Text>
                </View>
                <View style={style.descriptionContent}>
                    <TextInput onChangeText={(txt) => this.getUserName(txt)} placeholder="Username" placeholderTextColor={this.isEmpty(username) == true && attempt == true ? "red" : "#fff"} autoCorrect={false} style={{ borderBottomWidth: 1, borderBottomColor: this.isEmpty(username) == true && attempt == true ? "red" : "#fff", marginHorizontal: 40, paddingVertical: 10, marginVertical: 5, color: "#fff" }} />
                    <TextInput onChangeText={(txt) => this.getEmail(txt)} placeholder="Email" placeholderTextColor={(this.isEmpty(email) == true && attempt == true) ? "red" : "#fff"} autoCorrect={false} style={{ borderBottomWidth: 1, borderBottomColor: this.isEmpty(email) == true && attempt == true ? "red" : "#fff", marginHorizontal: 40, paddingVertical: 10, marginVertical: 5, color: "#fff" }} />
                    <TextInput onChangeText={(txt) => this.getPassword(txt)} placeholder="Password" placeholderTextColor={this.isEmpty(password) == true && attempt == true ? "red" : "#fff"} autoCorrect={false} secureTextEntry={true} style={{ borderBottomWidth: 1, borderBottomColor: this.isEmpty(password) == true && attempt == true ? "red" : "#fff", marginHorizontal: 40, paddingVertical: 10, marginVertical: 5, color: "#fff" }} />
                </View>
                <TouchableOpacity onPress={() => this.onSubmit()} style={{ borderRadius: 40, borderWidth: 2, borderColor: "#fff", backgroundColor: 'transparent', marginHorizontal: 70, height: 70, justifyContent: 'center' }}>
                    <Text style={style.btnsignin}>s i g n  u p</Text>
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
        fontSize: 32,
        fontWeight: "700",
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