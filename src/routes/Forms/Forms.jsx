import React, { Component } from 'react'
import './Forms.scss'

import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup';


const FormSchema = yup.object().shape({
    name: yup.string().required().min(3, 'Name too short'),
    email: yup.string().email('Invalid Email').required(),
    age: yup
        .number()
        .required()
        .positive()
        .integer()
        .max(100, 'Really that old?').min(5, 'You should\'nt be online kid'),
});


export default class Forms extends Component {
    render() {
        return (
            <div className="page FormPage">
                <h1>Form demo</h1>
                <h2>Formic + Yup</h2>

                <Formik
                    initialValues={{ email: '', name: 'me', age: 21 }}

                    onSubmit={(values, actions) => {
                        alert("Form submitted: \n " + JSON.stringify(values))
                        actions.setSubmitting(false)
                    }}

                    // validate={values => {
                    //     let errors = {};
                    //     // ...
                    //     if (values.email !== 'email') {
                    //         errors.email = 'invalid'
                    //     }
                    //     if (Object.keys(errors).length) {
                    //         return Promise.reject(errors)
                    //     }
                    // }}

                    validationSchema={FormSchema}
                >

                    {props => {
                        const { errors, handleSubmit ,isSubmitting } = props;
                        return (
                            <Form>
                                <div className="input-group">
                                    <Field type="email" name="email" className={errors.email ? "text-input error" : "text-input"} />
                                    <ErrorMessage name="email" component="div" className="error-message" />
                                </div>
                                <div className="input-group">
                                    <Field type="text" name="name" className={errors.name ? "text-input error" : "text-input"} />
                                    <ErrorMessage name="name" component="div" className="error-message" />
                                </div>
                                <div className="input-group">
                                    <Field type="number" name="age" className={errors.age ? "text-input error" : "text-input"} />
                                    <ErrorMessage name="age" component="div" className="error-message" />
                                </div>

                                <button type="submit" className="lg" disabled={isSubmitting} onClick={handleSubmit}>
                                    Submit
                                </button>
                            </Form>
                        )
                    }}

                </Formik>
            </div>
        )
    }
}
