import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

const WelcomeButton = ({ title, onPress, bgColor, color }) => {
    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor: bgColor }]}
            onPress={onPress}
        >
            <Text style={[styles.text, { color }]}>{title}</Text>
        </TouchableOpacity>
    );
};

export default WelcomeButton;

const styles = StyleSheet.create({
    button: {
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

