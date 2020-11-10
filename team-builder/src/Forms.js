import React, { useState } from "react";
import { Button, Col, Row, Form, FormGroup, Label, Input, Card, CardBody } from "reactstrap";

const Forms = (props) => {
    console.log("Forms props: ", props);
    const [mem, setMem] = useState({
        name: "",
        email: "",
        role: ""
    });

    const changeHandler = (e) => {
        setMem({
            ...mem,
            [e.target.name]: e.target.value
        });
    };

    const submitMem = (e) => {
        e.preventDefault();
        props.addNewMem(mem);
        setMem({ name: "", email: "", role: "" });
    };

    return (
        <Form className="form" onSubmit={submitMem} >
            <Card >
                <CardBody className="cardBody">
                    <Row form className="formContent">
                        <Col md={6}>
                            <FormGroup>
                                <Label htmlFor="name" >Name</Label>
                                <Input type="text" name="name" placeholder="John Doe" onChange={changeHandler} />
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row form className="formContent">
                        <Col md={6}>
                            <FormGroup>
                                <Label htmlFor="email" >Email</Label>
                                <Input type="text" name="email" placeholder="example@example.com" onChange={changeHandler} />
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row form className="formContent">
                        <Col md={6}>
                            <FormGroup>
                                <Label htmlFor="role" >Role</Label>
                                <Input type="text" name="role" placeholder="Web Dev" onChange={changeHandler} />
                            </FormGroup>
                        </Col>
                    </Row>

                    <Button color="secondary" type="submit" >Add New Member</Button>
                </CardBody>
            </Card>
        </Form>
    );
};

export default Forms; 