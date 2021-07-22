import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import WelcomeButton from "../components/WelcomeButton";

const WelcomeScreen = ({ navigation }) => {
    return (
        <ImageBackground
            source={require("../../assets/11.jpg")}
            blurRadius={1}
            style={styles.background}
        >
            <View>
                <Text
                    style={[styles.header, { marginBottom: 20, fontSize: 28 }]}
                >
                    Welcome to My Blog
                </Text>
                <Text style={[styles.header, { fontSize: 18 }]}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been ...
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <WelcomeButton
                    title="Join Us"
                    color="black"
                    bgColor="white"
                    onPress={() => navigation.navigate("Register")}
                ></WelcomeButton>
                <WelcomeButton
                    title="Sign In"
                    color="white"
                    onPress={() => navigation.navigate("Login")}
                ></WelcomeButton>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    header: {
        color: "white",
        fontWeight: "bold",
        paddingLeft: "7%",
        paddingRight: "7%",
    },
    buttonContainer: {
        flexDirection: "row",
        padding: 50,
    },
});

export default WelcomeScreen;
