import HomePageHeader from "./HomePageHeader";
import { Row, Col, Container } from "react-bootstrap";

// import banner from '../../assets/images/home/banner.jpg'

const Banner = () => {
    return (
        <Row>
            <Container fluid id='banner'>
                <HomePageHeader />
            </Container>
        </Row>
    );
}

export default Banner;