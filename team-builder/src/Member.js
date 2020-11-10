import React from "react";
import { Card, CardBody, CardTitle, CardText,  Col} from "reactstrap";

const Member = (props) => {
    console.log("Member props: ", props);

    return (
        <div className="membersDiv">
            {props.members.map((mem) => (
                <Col sm="2.5" className="members">
                    <Card>
                        <CardBody className="memCard">
                            <CardTitle>{mem.name}</CardTitle>
                            <CardText>{mem.email}</CardText>
                            <CardText>{mem.role}</CardText>
                        </CardBody>
                    </Card>
                </Col>
            ))}
        </div>
    )
}


export default Member; 