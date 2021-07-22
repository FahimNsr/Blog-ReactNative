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
    password: Yup.string()
        .required("Please enter a password.")
        .min(8, "Password must be at least 8 characters."),
    confirmPassword: Yup.string()
        .required("Please enter your password again")
        .oneOf([Yup.ref("password"), null], "Passwords do not match"),
});

const RegisterScreen = () => {
    return (
        <Screen style={styles.container}>
            <Text style={styles.header}>BECAME A BLOG MEMBER</Text>
            <View style={{ flexDirection: "row" }}>
                <Text style={styles.des}>
                    Create your Blog Member profile and get first access to the
                    very best of Blog inspiration and community.
                </Text>
            </View>
            <AuthForm
                initialValues={{ email: "", password: "", confirmPassword: "" }}
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
                <AuthInput
                    name="confirmPassword"
                    placeholder="Enter your password again"
                    autoCompleteType="password"
                    autoCorrect={false}
                    placeholderTextColor="gray"
                    secureTextEntry
                />
                <View style={{ flexDirection: "row" }}>
                    <Text style={styles.rules}>
                        By creating an account, you agree to Blog's{" "}
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
                <AuthButton title="JOIN US" />
            </AuthForm>

            <View style={{ flexDirection: "row" }}>
                <Text style={styles.rules}>
                    Already a Member?{" "}
                    <Text
                        style={{
                            textDecorationLine: "underline",
                            color: "black",
                        }}
                    >
                        Sign In.
                    </Text>
                </Text>
            </View>
        </Screen>
    );
};

export default RegisterScreen;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    header: {
        color: "black",
        fontWeight: "bold",
        fontSize: 24,
        marginTop: "20%",
        marginBottom: "6%",
    },
    des: {
        width: "85%",
        textAlign: "center",
        color: "grey",
        fontSize: 15,
        marginBottom: "5%",
    },

    rules: {
        width: "85%",
        textAlign: "center",
        color: "grey",
        fontSize: 12.5,
        marginTop: "5%",
    },
});
