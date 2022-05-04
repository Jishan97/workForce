import React from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';

const Register = () => {
    return (
        <Form>

            <FormGroup>
                <Label for="Name">
                    Name
                </Label>
                <Input
                    id="Name"
                    name="name"
                    placeholder="Enter Name"
                    type="text"
                />
            </FormGroup>


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
                    placeholder="Choose your password"
                    type="password"
                />
            </FormGroup>


            <FormGroup>
                <Label for="phone">
                    Phone
                </Label>
                <Input
                    id="phone"
                    name="phone"
                    placeholder="Enter your phone number"
                    type="number"
                />
            </FormGroup>

            <FormGroup>
                <Label for="age">
                    Age
                </Label>
                <Input
                    id="age"
                    name="age"
                    placeholder="Enter your age "
                    type="number"
                />
            </FormGroup>



            <FormGroup>
                <Label for="role">
                    Role
                </Label>
                <Input
                    id="role"
                    name="role"
                    placeholder="Enter your role "
                    type="text"
                />
            </FormGroup>
            <Button>
                Submit
            </Button>


        </Form>
    )
}

export default Register;