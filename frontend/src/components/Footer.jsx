import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col className="text-center py-3">
              <p>
                Shopify !&copy; {currentYear} :{" "}
                <a href="mailto://katreaniket3@gmail.com">
                  katreaniket3@gmail.com
                </a>
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
