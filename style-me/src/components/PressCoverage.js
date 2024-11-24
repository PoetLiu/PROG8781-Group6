import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const pressItems = [
  {
    logo: "/images/blog/fashion-united-logo.png",
    title: "The top metaverse-based fashion events of 2022, and if they are returning next year",
  },
  {
    logo: "/images/blog/yahoo-logo.png",
    title: "STYLE.ME Partners with XRSPACE to Bring Digital Fashion to the Metaverse",
  },
  {
    logo: "/images/blog/yahoo-finance-logo.png",
    title: "Style.me to Enter the Metaverse With Wearable NFTs",
  },
  {
    logo: "/images/blog/eco-cult-logo.png",
    title: "Could Digital Fashion Be an Eco-Friendly Replacement for Fast Fashion?",
    subtitle: "What Happens to Clothes You Return? They Might Get Trashed",
  },
  {
    logo: "/images/blog/vogue-logo.png",
    title: "IRL Shopping Withdrawals? These Apps Fill The Void Perfectly",
  },
  {
    logo: "/images/blog/wwd-logo.png",
    title: "WWD List: 7 Ways to Solve Fashion's Fit Problem",
  },
  {
    logo: "/images/blog/the-telegraph-logo.png",
    title: "Could virtual changing rooms replace the real thing in the fight against Covid-19?",
  },
  {
    logo: "/images/blog/global-carbs-logo.png",
    title: "Could virtual fittings be the solution to both retailers and sustainable fashion?",
  },
  {
    logo: "/images/blog/etn-logo.png",
    title: "Virtual Fitting Room 'Giving Customers Confidence'",
  },
];

const PressCoverage = () => {
  return (
    <Container className="my-5">
      <h3 className="fw-bold mb-4">Press Coverage</h3>
      <Row className="g-4">
        {pressItems.map((item, index) => (
          <Col md={6} key={index} className="d-flex align-items-center">
            <div className="d-flex w-100">
              <img
                id = "press-coverage"
                src={item.logo}
                alt={`${item.title} logo`}
                className="img-fluid me-3"
              />
              <div>
                <h6 className="fw-bold mb-1">{item.title}</h6>
                {item.subtitle && <p className="text-muted small mb-0">{item.subtitle}</p>}
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PressCoverage;
