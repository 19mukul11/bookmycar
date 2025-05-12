import { Row, Col, Container } from "react-bootstrap";

import Feature from './Feature';

const Features = () => {

    const featureData = [
        {
            'image': 'hours',
            'label': '24X7 Customer Support'
        },
        {
            'image': 'permit',
            'label': 'All India Permit'
        },
        {
            'image': 'verified',
            'label': 'Verified Travel Agencies'
        },
        {
            'image': 'hours',
            'label': '24X7 Customer Support'
        },
        {
            'image': 'permit',
            'label': 'All India Permit'
        },
        {
            'image': 'verified',
            'label': 'Verified Travel Agencies'
        }
    ];

    console.log(featureData);
    

    return (
        <Row id="features_container">
            <Col>
                <Row className="mb-5">
                    <h2 className="text-center">What makes us different</h2>
                </Row>
                <Row id="features_parent">
                    {
                        featureData && featureData.map((data, index) => {
                            return <Feature key={index} image={data.image} label={data.label} />
                        })
                    }
                </Row>
            </Col>
        </Row>
    );
}

export default Features;