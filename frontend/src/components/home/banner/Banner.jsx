import { Row, Col, Container } from "react-bootstrap";

import HomePageHeader from "./HomePageHeader";
import Quotation from "./Quotation";

const Banner = () => {
    return (
        <Row id="banner">
            <Col>
                <HomePageHeader />
                <Quotation />
            </Col>
        </Row>
    );
}

export default Banner;