import React from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';

const Login = () => {
    return (
        <Form>
            <FormGroup>
                <Label for="exampleEmail">
                    Email
                </Label>
                <Input
                    id="exampleEmail"
                    name="email"
                    placeholder="Enter your email"
                    type="email"
                />
            </FormGroup>

            <FormGroup>
                <Label for="password">
                    Password
                </Label>
                <Input
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    type="password"
                />
            </FormGroup>
            <Button>
                Submit
            </Button>


        </Form>
    )
}

export default Login;