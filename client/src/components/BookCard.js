import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap"
const BookCard = (prop) => {
    return (
        <Card>

            <Card.Body>
                <Row>
                    <Col sm="2">
                        <Card.Img  style={{width: "100%"}} className="" variant="top" src={prop.book.volumeInfo.imageLinks ? prop.book.volumeInfo.imageLinks.thumbnail : "https://st4.depositphotos.com/14953852/22772/v/1600/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg"} />
                    </Col>
                    <Col sm="10">
                        <a  href={prop.book.volumeInfo.infoLink}>...View</a>
                        <Button>Save</Button>
                        <Card.Title>{prop.book.volumeInfo.title}</Card.Title>
                        <Card.Text>
                            {prop.book.volumeInfo.description}
                       </Card.Text>
                    </Col>
                </Row>



            </Card.Body>
        </Card>
    )
}

export default BookCard;