import { Row, Col, Button } from "react-bootstrap"

function HomePageHeader() {
    return (
        <Row id="home_page_header" className=" py-3">
            <Col>
                <h1 className="text-white" id="logo">BookMyCar</h1>
            </Col>
            <Col className="text-end">
                <Button variant="primary" className="mx-3 mt-1">Book a Ride</Button>
                <Button variant="warning" className="mt-1">Agency Login</Button>
            </Col>
        </Row>
    )
}

export default HomePageHeader