import React from "react";
import { Formik } from "formik";

const AuthForm = ({
    initialValues,
    onSubmit,
    validationSchema,
    children,
}) => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {() => <>{children}</>}
        </Formik>
    );
};

export default AuthForm;
