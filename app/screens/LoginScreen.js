import React from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Yup from "yup";


import AuthButton from "../components/auth/AuthButton";
import AuthForm from "../components/auth/AuthForm";
import AuthInput from "../components/auth/AuthInput";
import Screen from "../components/shared/Screen";

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .required("Please enter a valid email address.")
        .email("Please enter a valid email address."),
    password: Yup.string().required("Please enter a password."),
});

const LoginScreen = () => {
    return (
        <Screen style={styles.container}>
            <Text style={styles.header}>SIGN IN YOUR ACCOUNT</Text>
            <AuthForm
                initialValues={{ email: "", password: "" }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                <AuthInput
                    name="email"
                    placeholder="Email address"
                    autoCompleteType="email"
                    autoCorrect={false}
                    keyboardType="email-address"
                    placeholderTextColor="gray"
                />
                <AuthInput
                    name="password"
                    placeholder="Password"
                    autoCompleteType="password"
                    autoCorrect={false}
                    placeholderTextColor="gray"
                    secureTextEntry
                />
                <View style={{ flexDirection: "row" }}>
                    <Text style={styles.forgot}>Forgotten your password?</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Text style={styles.rules}>
                        By logging in, you agree to Blog's{" "}
                        <Text style={{ textDecorationLine: "underline" }}>
                            Privacy Policy
                        </Text>{" "}
                        and{" "}
                        <Text style={{ textDecorationLine: "underline" }}>
                            Terms of Use
                        </Text>
                        .
                    </Text>
                </View>
                <AuthButton title="SIGN IN" />
            </AuthForm>

            <View style={{ flexDirection: "row" }}>
                <Text style={styles.rules}>
                    Not a Member?{" "}
                    <Text
                        style={{
                            textDecorationLine: "underline",
                            color: "black",
                        }}
                    >
                        Join Us.
                    </Text>
                </Text>
            </View>
        </Screen>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    header: {
        color: "black",
        fontWeight: "bold",
        marginTop: "20%",
        marginBottom: "10%",
        fontSize: 24,
    },
    forgot: {
        width: "85%",
        textAlign: "right",
        color: "darkgray",
        marginTop: "5%",
        marginBottom: "7%",
    },
    rules: {
        width: "75%",
        textAlign: "center",
        color: "grey",
        fontSize: 13,
    },
});
