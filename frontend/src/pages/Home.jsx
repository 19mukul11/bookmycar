import { Container, Row, Col } from "react-bootstrap";

import Banner from "../components/home/Banner";

function Home() {
    return (
        <Container fluid>
            <Row id="banner">
                <Col>
                    <Row>
                        <Col>
                            <h1 className="text-light">BookMyCar</h1>
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;