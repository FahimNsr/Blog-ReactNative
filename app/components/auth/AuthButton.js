import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useFormikContext } from "formik";

const AuthButton = ({ title }) => {
    const { handleSubmit } = useFormikContext();
    return (
        <View style={{ flexDirection: "row" }}>
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.text}> {title}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default AuthButton;

const styles = StyleSheet.create({
    button: {
        backgroundColor: "black",
        borderRadius: 3,
        height: 42,
        width: "85%",
        justifyContent: "center",
        marginTop: "7%",
        marginBottom: "5%",
    },
    text: {
        fontSize: 16,
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
});
