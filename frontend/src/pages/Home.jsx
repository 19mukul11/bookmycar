import { Container, Row, Col } from "react-bootstrap";

import Banner from "../components/home/banner/Banner";
import Features from "../components/home/features/Features";

function Home() {
    return (
       <Container fluid>
            <Banner />
            <Features/>
       </Container>
    )
}

export default Home;