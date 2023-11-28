

// Import necessary libraries
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Container, Row, Col, Form as BootstrapForm, Button } from 'react-bootstrap';
import './register.scss'

// Define Yup validation schema
const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    name: Yup.string().required('name is required'),
    phone: Yup.string()
        .matches(/^\d{10,}$/, 'Phone number must have at least 10 digits')
        .required('Phone number is required'),
    password: Yup.string().required('Password is required'),
});

// Define the onSubmit function
const onSubmit = (values, { setSubmitting }) => {
    // You can perform login logic here
    console.log('Submitted values:', values);

    // Reset submitting status
    setSubmitting(false);
};

// Component for the login form
const RegisterFormik = () => (
    <div className="register-container">

        <Container >
            <Row className="justify-content-center">
                <Col md={6}>
                    <h2 className="mt-5 mb-4">Register</h2>
                    <Formik
                        initialValues={{ email: '', password: '', name: '', phone: '' }}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                    >
                        <Form>
                            <BootstrapForm.Group controlId="email">
                                <BootstrapForm.Label>Name</BootstrapForm.Label>
                                <Field
                                    type="text"
                                    name="name"
                                    placeholder="Enter your name"
                                    as={BootstrapForm.Control}
                                    isInvalid={(touched, error) => touched && error}
                                />
                                <ErrorMessage name="name" component={BootstrapForm.Control.Feedback} type="invalid" />
                            </BootstrapForm.Group>

                            <BootstrapForm.Group controlId="phone">
                                <BootstrapForm.Label>phone</BootstrapForm.Label>
                                <Field
                                    type="number"
                                    name="phone"
                                    placeholder="Enter your phone"
                                    as={BootstrapForm.Control}
                                    isInvalid={(touched, error) => touched && error}
                                />
                                <ErrorMessage name="phone" component={BootstrapForm.Control.Feedback} type="invalid" />
                            </BootstrapForm.Group>
                            <BootstrapForm.Group controlId="email">
                                <BootstrapForm.Label>Email</BootstrapForm.Label>
                                <Field
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    as={BootstrapForm.Control}
                                    isInvalid={(touched, error) => touched && error}
                                />
                                <ErrorMessage name="email" component={BootstrapForm.Control.Feedback} type="invalid" />
                            </BootstrapForm.Group>

                            <BootstrapForm.Group controlId="password">
                                <BootstrapForm.Label>Password</BootstrapForm.Label>
                                <Field
                                    type="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    as={BootstrapForm.Control}
                                    isInvalid={(touched, error) => touched && error}
                                />
                                <ErrorMessage name="password" component={BootstrapForm.Control.Feedback} type="invalid" />
                            </BootstrapForm.Group>

                            <Button variant="primary" type="submit" className="mt-3 mx-auto">
                                Submit
                            </Button>
                        </Form>
                    </Formik>
                </Col>
            </Row>
        </Container>
    </div>
);

export default RegisterFormik;

