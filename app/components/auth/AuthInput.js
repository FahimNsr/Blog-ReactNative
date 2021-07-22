import React from "react";
import { Text , View, StyleSheet, TextInput } from "react-native";
import { useFormikContext } from "formik";

const AuthInput = ({ name, ...otherProps }) => {
    const { handleChange, setFieldTouched, errors, touched } =
        useFormikContext();

    return (
        <>
            <View style={{ flexDirection: "row" }}>

                <TextInput
                    style={[
                        styles.textInput,
                        errors[name] && touched[name]
                            ? { borderColor: "crimson" }
                            : {},
                    ]}
                    {...otherProps}
                    onChangeText={handleChange(name)}
                    onBlur={() => setFieldTouched(name)}
                />
            </View>
            {!touched[name] || !errors[name] ? null : (
                <Text style={styles.error} >{errors[name]}</Text>
            )}
        </>
    );
};

export default AuthInput;

const styles = StyleSheet.create({
    textInput: {
        width: "85%",
        height: 42,
        borderRadius: 3,
        borderWidth: 0.8,
        borderColor: "lightgrey",
        fontSize: 14,
        marginTop: "2%",
        marginBottom: "2%",
        paddingLeft: 15,
    },
    error: {
        width: "85%",
        flexDirection: "row",
        textAlign: "left",
        justifyContent: "flex-start",
        color: "crimson",
        fontSize: 14,
    },
});
