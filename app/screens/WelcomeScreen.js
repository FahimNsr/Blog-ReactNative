import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
} from "react-native";

const WelcomeScreen = () => {
    return (
        <ImageBackground
            source={require("../../assets/11.jpg")}
            blurRadius={0.8}
            style={styles.background}
        >
            <View>
                <Text style={[styles.header, { marginBottom: 20 , fontSize: 28}]}>
                    Welcome to My Blog
                </Text>
                <Text style={[styles.header, { fontSize: 18 }]}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ...
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={[styles.auth, { backgroundColor: "white" }]}
                >
                    <Text style={[styles.text, { color: "#333333" }]}>
                        Register
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.auth}>
                    <Text style={[styles.text, { color: "white" }]}>Login</Text>
                </TouchableOpacity>
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
        color: "#fff",
        fontWeight: "bold",
        paddingLeft: "7%",
        paddingRight: "7%",

    },
    buttonContainer: {
        flexDirection: "row",
        padding: 50,
    },
    auth: {
        flexDirection: "row",
        borderRadius: 30,
        margin: 5,
        paddingLeft: "20%",
        paddingRight: "20%",
        padding: "7%",
        borderWidth: 1.5,
        borderColor: "#FFFFFF",
    },
    text: {
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default WelcomeScreen;
